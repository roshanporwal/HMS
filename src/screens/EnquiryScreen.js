import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../colors';
import Enquiries from '../components/Enquiries';
import Prospects from '../components/Prospects';
import Appointments from '../components/Appointments';
import CalendarPicker from 'react-native-calendar-picker';
function EnquiryScreen() {
    return (
        <View style={styles.conatiner}>
            <View style={styles.conatiner1}>
                <View style={styles.firstCont}>
                    <Enquiries />
                </View>
                <View style={styles.secondCont}>
                    <Prospects />
                </View>
            </View>
            <View style={styles.conatiner2}>
                <View style={styles.thirdCont}>
                    <Appointments />
                </View>
                <View style={styles.fourthCont}>
                    <CalendarPicker
                        //onDateChange={this.onDateChange}
                         width={400}
                         //scrollable={true}
                         height={400}
                         selectedDayTextColor={"white"}
                         selectedDayStyle={{backgroundColor:"#247360"}}
                    />
                </View>
            </View>
        </View>
    )
}
export default EnquiryScreen;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: colors.white,
        paddingLeft: 20,
        paddingRight:20,
        paddingTop:10,
    },
    firstCont: {
        //backgroundColor: 'red',
        margin: 5,
        flex: 1
    },
    secondCont: {
        //backgroundColor: 'red',
        margin: 5,
        flex: 1
    },
    thirdCont: {
        //backgroundColor: 'red',
        flex: 2,
        margin: 5
    },
    fourthCont: {
        //backgroundColor: 'red',
        flex: 1,
        margin: 5
    },
    conatiner1: {
        flexDirection: 'row',
        flex: 1,
    },
    conatiner2: {
        flexDirection: 'row',
        flex: 1,
    },
})