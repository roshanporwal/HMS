import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../colors';
import Enquiries from '../components/Enquiries';
import Prospects from '../components/Prospects';
import Appointments from '../components/Appointments';
import CalendarPicker from 'react-native-calendar-picker';
import Schedual from '../components/Schedual';

const NAME_SET_1 = [
    "New",
    "Follow Up",
    "postoperative",
    "Proctoscopy",
];

const NAME_SET_2 = [
    "Cash",
    "Card",
    "Online",
    "Paytm",
]

function OpdScreen() {
    return (
        <View style={styles.conatiner}>
            <View style={styles.conatiner1}>
                <View style={styles.firstCont}>
                    <Schedual />
                </View>
            </View>
            <View style={styles.conatiner2}>
                <View style={styles.thirdCont}>
                    <CalendarPicker
                        //onDateChange={this.onDateChange}
                        width={400}
                        //scrollable={true}
                        height={400}
                        selectedDayTextColor={"white"}
                        selectedDayStyle={{ backgroundColor: "#247360" }}
                    />
                </View>
                <View style={{ flex: 1}}>
                    <ScrollView>
                        <View style={styles.fourthCont}>
                            {
                                NAME_SET_1.map((name, index) => {
                                    return (
                                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                                            <TouchableOpacity style={{ flex: 1, height: 35, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, margin: 5 }}>
                                                <Text style={{ fontSize: 18 }}>{name}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flex: 1, height: 35, borderWidth: 1, justifyContent: 'center', borderRadius: 5, margin: 5, alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18 }}>1235</Text>
                                            </TouchableOpacity>

                                        </View>
                                    )
                                })
                            }
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ flex: 1, height: 35, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, margin: 5, backgroundColor: colors.darkGreen }}>
                                    <Text style={{ color: 'white' }}>Total</Text>
                                </View>
                                <View style={{ flex: 1, height: 35, borderWidth: 1, justifyContent: 'center', borderRadius: 5, margin: 5, backgroundColor: colors.darkGreen, alignItems: 'center' }}>
                                    <Text style={{ color: 'white' }}>51561</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.fifthCont}>
                            {
                                NAME_SET_2.map((name, index) => {
                                    return (
                                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <TouchableOpacity style={{ flex: 1, height: 35, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, margin: 5 }}>
                                                <Text style={{ fontSize: 18 }}>{name}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flex: 1, height: 35, borderWidth: 1, justifyContent: 'center', borderRadius: 5, margin: 5, alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18 }}>3256</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ flex: 1, height: 35, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, margin: 5, backgroundColor: colors.darkGreen }}>
                                    <Text style={{ color: 'white' }}>Total</Text>
                                </View>
                                <View style={{ flex: 1, height: 35, borderWidth: 1, justifyContent: 'center', borderRadius: 5, margin: 5, backgroundColor: colors.darkGreen, alignItems: 'center' }}>
                                    <Text style={{ color: 'white' }}>51561</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
export default OpdScreen;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: colors.white,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        flexDirection: 'row'
    },
    firstCont: {
        //backgroundColor: 'red',
        margin: 5,
        flex: 1
    },
    secondCont: {
        backgroundColor: 'red',
        margin: 5,
        flex: 1
    },
    thirdCont: {
        //backgroundColor: 'red',
        flex: 1,
        margin: 5
    },
    fourthCont: {
        //backgroundColor: 'red',
        //flex: 1,
        margin: 5
    },
    fifthCont: {
        //flex: 1,
        margin: 5,
        //backgroundColor: 'red',
    },
    conatiner1: {
        flexDirection: 'column',
        flex: 2,
    },
    conatiner2: {
        flexDirection: 'column',
        flex: 1,
    },
})