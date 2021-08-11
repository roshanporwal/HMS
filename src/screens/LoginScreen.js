import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform,KeyboardAvoidingView, Image, ImageBackground } from 'react-native';
import InputField from '../components/InputField';
import AppButton from '../components/AppButton';
import { colors } from '../colors';

const ACCOUNT_TYPES = [
    "Doctor",
    "Receptionist",
    "Admin",
    "Super Admin"
]
function LoginScreen (props)  {
    const [selectedValue, setSelectedValue] = useState('Account Type');
    const [showpicker, setShowPicker] = useState(false);
    const [formData, setFormData] = useState({});
    const {navigation} = props;

    function fieldOnChange(data) {
        formData[data.name] = data.value;
        setFormData(formData);
    }
    return (
        <View style={styles.conatiner}>
            <ImageBackground style={{justifyContent: "center",alignItems: "center",flex:1,height:'100%', width:'100%'}} source={require('../assets/background.png')}>
            {/* <KeyboardAvoidingView style={styles.conatiner}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            //keyboardVerticalOffset={300}
            > */}
            <Image source={require('../assets/logo.png')}/>
            <Text style={styles.headerTxt}>Hospital Management System</Text>
            <View style={styles.btnCont}>
                <TouchableOpacity onPress={()=>setShowPicker(!showpicker)} style={styles.button}>
                    <Text style={styles.btnText}>{selectedValue}</Text>
                </TouchableOpacity>
                {(showpicker) ? 
                  ACCOUNT_TYPES.map((value, index)=>{
                      return(
                          <TouchableOpacity onPress={()=>{setSelectedValue(value), setShowPicker(false)}} key={index} style={styles.pickCont}>
                              <Text style={styles.pickText}>{value}</Text>
                          </TouchableOpacity>
                      )
                  }) : 
                  <View/>
                } 
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Location</Text>
                </TouchableOpacity>
                <InputField 
                style={styles.button}
                label="Email"
                onChange={fieldOnChange}
                name="Email"
                />
                <InputField 
                style={styles.button}
                onChange={fieldOnChange}
                label="Password"
                name="Password"
                />
                <AppButton style={styles.appBtn} textStyle={styles.textStyle} title="Login" onPress={()=>navigation.navigate('TabsScreen')}/>
            </View>
            </ImageBackground>
            {/* </KeyboardAvoidingView> */}
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //backgroundColor:'#7DD394'
    },
    button:{
        width:450,
        height:50,
        margin:10,
        //alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#209C9F',
        borderBottomWidth:3,
        borderBottomColor:colors.white,
    },
    btnText:{
        color:'white',
        marginLeft:20,
        fontSize:24
        
    },
    btnCont:{
        //backgroundColor:'pink',
        width:"100%",
        //height:'40%',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    appBtn:{
        width:270
    },
    textStyle:{
        fontSize:24,
        fontWeight:'700'
    },
    headerTxt:{
        fontSize:48,
        fontWeight:'bold',
        color:colors.white,
        marginVertical:20,
    },
    pickCont:{
        width:450,
        //backgroundColor:'green',
    },
    pickText:{
        fontSize:24,
        color:colors.white,
        margin:15,
    },
})

export default LoginScreen;