import React , { useState, useEffect }from 'react';
import { View, Image, Text,Keyboard, TouchableOpacity, StyleSheet } from 'react-native';
import BottomTabsNavigation from '../navigation/BottomTabsNavigation';
import EnquiryScreen from '../screens/EnquiryScreen';
import OpdScreen from '../screens/OpdScreen';
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
              //style={{ height:focused ? 60 : 40, width: focused ? 60 : 40}}
            />
          </View>
        ),
      }
  },
  {
    name: 'OpdScreen',
    component: OpdScreen,
    options: {
        tabBarIcon: ({ focused , size}) => (
          <View style={{zIndex:10, overflow:'visible', elevation:0}}>
            <Image source={require('../assets/bottom2.png')}
              //style={{ height:focused ? 60 : 40, width: focused ? 60 : 40}}
              style={{zIndex:10, overflow:'visible',}}
              size={size}
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
              //style={{ height:focused ? 60 : 40, width: focused ? 60 : 40}}
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
              //style={{ height:focused ? 60 : 40, width: focused ? 60 : 40}}
            />
          </View>
        ),
      }
  },
  
];

export default function TabsScreen() {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);
  return (
    <View style={{flex:1}}>
  <BottomTabsNavigation screens={TAB_SCREENS} />
  <Image style={(keyboardStatus) ? styles.hide:styles.logo} source={require('../assets/logo2.png')}/>
  <TouchableOpacity onPress={()=>alert('logged out')} style={(keyboardStatus) ? styles.hide:styles.logout}>
  <Image source={require('../assets/logout.png')}/>
  </TouchableOpacity>
  </View>)
}


const styles=StyleSheet.create({
  hide:{
    display:'none'
  },
  logo:{
   position:'absolute',
   bottom:10,
   left:20
},
logout:{
 position:'absolute',
 bottom:5,
 right:20
}
})