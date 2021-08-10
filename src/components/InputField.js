import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../colors';

export default function InputField(props) {
  return (
    <View>
      <Text style={(props.label == undefined) ? styles.hide:styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.textInput, props.style]}
        placeholder={props.placeholder}
        placeholderTextColor={(props.placeholderTextColor) ? props.placeholderTextColor : colors.placeholder }
        onChangeText={val => props.onChange({ name: props.name, value: val })}
        secureTextEntry={props.type === 'password'}
        defaultValue={props.value}
        maxLength={props.maxLength}
        multiline={props.multiline === 'multiline'}
        numberOfLines={props.lines}
        keyboardType={props.keyboard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    paddingVertical: 12,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    color: colors.input,
    borderBottomWidth: 1,
    //borderRadius: 18,
    //marginTop: 7,
    //marginBottom: 15,
  },
  label:{
    color:colors.white,
    marginHorizontal:5,
    marginVertical:2,
    fontSize:24
  },
  hide:{
    display:'none'
  }
});
