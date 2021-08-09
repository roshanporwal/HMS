import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import screens from '../screens';

const Stack = createStackNavigator();

export default function MainNavigation(props) {
  return (
    <NavigationContainer style={styles.mainContainer}>
      <Stack.Navigator initialRouteName="LandingScreen">
        {screens.map(scr => {
          return (
            <Stack.Screen
              key={scr.name}
              name={scr.name}
              component={scr.component}
              options={scr.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
  },
});
