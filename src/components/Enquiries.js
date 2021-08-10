import React from 'react';
import { ViewBase, Text, StyleSheet, View, FlatList , Image} from 'react-native';
import { colors } from '../colors';
import InputField from '../components/InputField';

const ENQUIRIES_FIELDS = [
    "Patient Name",
    "Phone Number",
    "Date",
    "Time",
    "Source",
];

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Ganesh Prasad Sankhua',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: 'Call'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Ganesh Prasad Sankhua',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: 'Call'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
        name: 'Ganesh Prasad Sankhua',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: 'Call'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        name: 'Ganesh Prasad Sankhua',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: 'Call'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f66',
        name: 'Ganesh Prasad Sankhua',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: 'Call'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
        name: 'Ganesh Prasad Sankhua',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: 'Call'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
        name: 'Ganesh Prasad Sankhua',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: 'Call'
    },

];

const renderItem = ({ item }) => (
    <View style={styles.item}>
        <View style={styles.viewbox}>
        <Text style={styles.entryTxt}>{item.name}</Text>
        </View>
        <View style={styles.viewbox}>
        <Text style={styles.entryTxt}>{item.num}</Text>
        </View>
        <View style={styles.viewbox}>
        <Text style={styles.entryTxt}>{item.date}</Text>
        </View>
        <View style={styles.viewbox}>
        <Text style={styles.entryTxt}>{item.time}</Text>
        </View>
        <View style={styles.viewbox}>
        <Text style={styles.entryTxt}>{item.source}</Text>
        </View>
    </View>
);

export default function Enquiries() {
    return (
        <View style={styles.container}>
            <View style={styles.subCont1}>
                <Text style={styles.enquiryTxt}>Enquiries</Text>
                <InputField 
                       style={styles.InputField}
                       placeholder="Search"
                       placeholderTextColor="black" />
                       <Image style={styles.searchIcon} source={require('../assets/search.png')}/>
            </View>
            <View style={styles.subCont2}>
                {
                    ENQUIRIES_FIELDS.map((val, index) => {
                        return (
                        <View key={index} style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.firstContTxt}>{val}</Text>
                        </View>
                        )
                    })
                }
            </View>
            <View style={styles.flatlistCont}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor:'yellow'
    },
    subCont1: {
        flexDirection: 'row',
        //backgroundColor:'yellow',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingHorizontal:10
    },
    subCont2: {
        height: 70,
        backgroundColor: colors.darkGreen,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    enquiryTxt: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    InputField: {
        width: 250,
        height: 40,
        backgroundColor: colors.lightGrey

    },
    firstContTxt: {
        color: colors.white,
        fontSize: 18
    },
    flatlistCont: {
        flex: 1,
        //backgroundColor: 'yellow'
    },
    item:{
        flexDirection:'row',
        //height:60,
        backgroundColor:colors.lightGrey,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'space-evenly',
        margin:3,
        paddingVertical:5
    },
    entryTxt:{
        //width:150
        fontSize:18
    },
    viewbox:{
        //backgroundColor:'red',
        //width:150,
        //height:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    searchIcon:{
        position:'absolute',
        right:20,
    }
})