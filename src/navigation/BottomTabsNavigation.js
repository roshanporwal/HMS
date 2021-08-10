import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Platform } from 'react-native'


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabsNavigation(props) {
  //console.log('Im in screen');
  const { width } = useWindowDimensions()
  return (
    <Tab.Navigator
     initialRouteName="EnquiryScreen"
     labeled={false}
     shifting={true}
     barStyle={{ backgroundColor: 'white', height:120, justifyContent:'center', alignItems:'center'}}
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