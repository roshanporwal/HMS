import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../colors';
import Enquiries from '../components/Enquiries';
import Prospects from '../components/Prospects';
import Appointments from '../components/Appointments';
function EnquiryScreen() {
    return (
        <View style={styles.conatiner}>
            <View style={styles.conatiner1}>
                <View style={styles.firstCont}>
                    <Enquiries/>
                </View>
                <View style={styles.secondCont}>
                <Prospects/>
                </View>
            </View>
            <View style={styles.conatiner2}>
                <View style={styles.thirdCont}>
                <Appointments/>
                </View>
                <View style={styles.fourthCont}>

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
        padding: 30
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