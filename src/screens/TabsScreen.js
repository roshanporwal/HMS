import React , { useState, useEffect }from 'react';
import { View, Image, Text,Keyboard, TouchableOpacity } from 'react-native';
import BottomTabsNavigation from '../navigation/BottomTabsNavigation';
import EnquiryScreen from '../screens/EnquiryScreen'
import { colors } from '../colors';

function screen1(){
  return (
      <View>
          <Text>screen1</Text>
      </View>
  )
}
function screen2(){
    return (
        <View>
            <Text>screen2</Text>
        </View>
    )
  }
  function screen3(){
    return (
        <View>
            <Text>screen3</Text>
        </View>
    )
  }
  function screen4(){
    return (
        <View>
            <Text>screen4</Text>
        </View>
    )
  }
const TAB_SCREENS = [
  {
    name: 'EnquiryScreen',
    component: EnquiryScreen,
    options: {
        tabBarIcon: ({ focused, size }) => (
          <View style={{marginBottom:30}}>
            <Image source={require('../assets/bottom1.png')}
              style={{ height:focused ? 60 : 40, width: focused ? 60 : 40}}
            />
          </View>
        ),
      }
  },
  {
    name: 'screen2',
    component: screen2,
    options: {
        tabBarIcon: ({ focused , size}) => (
          <View>
            <Image source={require('../assets/bottom2.png')}
              style={{ height:focused ? 60 : 40, width: focused ? 60 : 40}}
            />
          </View>
        ),
      }
  },
  {
    name: 'screen3',
    component: screen3,
    options: {
        tabBarIcon: ({ focused }) => (
          <View>
            <Image source={require('../assets/bottom3.png')}
              style={{ height:focused ? 60 : 40, width: focused ? 60 : 40}}
            />
          </View>
        ),
      }
  },
  {
    name: 'screen4',
    component: screen4,
    options: {
        tabBarIcon: ({ focused }) => (
          <View>
            <Image source={require('../assets/bottom4.png')}
              style={{ height:focused ? 60 : 40, width: focused ? 60 : 40}}
            />
          </View>
        ),
      }
  },
  
];

export default function TabsScreen() {
  return (
    <View style={{flex:1}}>
  <BottomTabsNavigation screens={TAB_SCREENS} />
  <Image style={{position:'absolute', bottom:10, left:20}} source={require('../assets/logo2.png')}/>
  <TouchableOpacity onPress={()=>alert('logged out')} style={{position:'absolute', bottom:5, right:20}}>
  <Image source={require('../assets/logout.png')}/>
  </TouchableOpacity>
  </View>)
}
