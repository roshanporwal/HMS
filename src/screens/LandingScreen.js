import React from 'react';
import {StyleSheet, Text, View } from 'react-native';



export default function LandingScreen(props) {
  console.log("this is landing scrren")
 
  return (
    <View style={styles.mainContainer}>
     <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
 
});




