import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator, BottomTabBar, Keyboard ,} from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Platform } from 'react-native'


//import screens from '../screens';
//import FloatingButton from '../components/FloatingButton';
//import { colors } from '../colors';
//import TabBar from '../components/Tabbar';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation(props) {
  console.log('Im in screen');
  return (
    <Tab.Navigator
      initialRouteName="MessagesScreen"
      tabBarOptions={{
        style: {
          height: 55,
        },
      }}
      tabBar={(props) => {
        return <View style={styles.tabBarCont}>
          {/* <View style={{height:100, backgroundColor:'yellow'}}></View> */}
          <View style={{ bottom:Platform.OS == 'android' ? 75 : 60, left: 0, right: 0,height:0, }}>
            <TabBar />
          </View>
          
         
        </View>
      }}
      // tabBarOptions={{
      //   keyboardHidesTabBar: true
      // }}
    >
      {props.screens.map(scr => (
        <Tab.Screen {...scr} key={scr.name}
          name={scr.name}
          component={scr.component}
          options={scr.options}
        />
      ))}
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tabBarCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomBar: {
    elevation: 0,
    borderTopWidth: 0,
    paddingBottom: 15,
    backgroundColor: 'transparent'
  },
  floatingBtn: {
    position: 'absolute',
    left: '50%',
    bottom: Platform.OS == 'android' ? 15 : 30,
  },
})