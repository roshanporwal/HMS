import React from 'react';
import { ViewBase, Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors } from '../colors';
import InputField from '../components/InputField';

const ENQUIRIES_FIELDS = [
    "Sr.No",
    "Doctor",
    "Patient",
    "Mobile",
    "Appo. Time",
    "Type",
    "Status",
    " ",
];

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        sl: 1,
        drname: 'Dr. Ashwin Porwal',
        name: 'Ganesh',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: require('../assets/docAdd.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        sl: 2,
        drname: 'Dr. Ashwin Porwal',
        name: 'Ganesh',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: require('../assets/docAdd.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
        sl: 3,
        drname: 'Dr. Ashwin Porwal',
        name: 'Ganesh',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: require('../assets/docAdd.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        sl: 4,
        drname: 'Dr. Ashwin Porwal',
        name: 'Ganesh',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: require('../assets/docAdd.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f66',
        sl: 5,
        drname: 'Dr. Ashwin Porwal',
        name: 'Ganesh',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: require('../assets/docAdd.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
        sl: 6,
        drname: 'Dr. Ashwin Porwal',
        name: 'Ganesh',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: require('../assets/docAdd.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
        sl: 7,
        drname: 'Dr. Ashwin Porwal',
        name: 'Ganesh',
        num: 9382887340,
        date: '6/21/19',
        time: '01:08 pm',
        source: require('../assets/docAdd.png')
    },

];

const ICONS = [
    {
        icon: require('../assets/opd.png'),
        name: 'OPD',
    },
    {
        icon: require('../assets/history.png'),
        name: 'OPD',
    },
    {
        icon: require('../assets/checkup.png'),
        name: 'OPD',
    },
    {
        icon: require('../assets/payment.png'),
        name: 'OPD',
    },

];
const renderItem = ({ item }) => (
    <View>
        <View style={styles.item}>
            <View style={styles.viewbox}>
                <Text style={styles.entryTxt}>{item.sl}</Text>
            </View>
            <View style={styles.viewbox}>
                <Text style={styles.entryTxt}>{item.drname}</Text>
            </View>
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
                <Text style={styles.entryTxt}>{item.date}</Text>
            </View>
            <View style={styles.viewbox}>
                <Text style={styles.entryTxt}>{item.time}</Text>
            </View>
            <View style={styles.viewbox}>
                <Image style={styles.entryImg} source={item.source} />
            </View>
        </View>
        <View style={{ flexDirection:'row',height: 100, backgroundColor: 'white', justifyContent:'space-evenly', alignItems:'center' }}>
              {
                  ICONS.map((item, index)=>{
                      return(
                          <View key={index}>
                              <Image style={{height:50, width:50}} source={item.icon}/>
                              <Text style={{textAlign:'center'}}>{item.name}</Text>
                          </View>
                      )
                  })
              }
              <Text style={{fontSize:18, fontWeight:'bold'}}>Rs.1500</Text>
        </View>
    </View>
);

export default function Schedual() {
    return (
        <View style={styles.container}>
            <View style={styles.subCont1}>
                <Text style={styles.enquiryTxt}>Today’s Schedual</Text>
                <Text style={styles.enquiryTxtt}>July 29, 2021</Text>
                <TouchableOpacity>
                    <Image style={styles.searchIcon} source={require('../assets/add.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.subCont2}>
                {
                    ENQUIRIES_FIELDS.map((val, index) => {
                        return (
                            <View key={index} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
        paddingHorizontal: 10
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
        width: 300,
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
    item: {
        flexDirection: 'row',
        //height:60,
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 3,
        paddingVertical: 5,
        marginVertical:10,
    },
    entryTxt: {
        //width:150
        fontSize: 18
    },
    entryImg: {
        height: 30,
        width: 30,
    },
    enquiryTxtt: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewbox: {
        //backgroundColor:'red',
        //width:150,
        //height:'100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchIcon: {
        //position:'absolute',
        right: 20,
    }
})