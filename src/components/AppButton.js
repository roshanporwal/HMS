import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../colors';
//import i18n from '../i18n';

export default function AppButton(props) {
//   let btnStyle;
//   let txtStyle;

//   switch (props.type) {
//     case 'primary':
//       btnStyle = styles.primary;
//       txtStyle = styles.textPrimary;
//       break;
//     case 'link':
//       btnStyle = styles.link;
//       txtStyle = styles.textLink;
//       break;
//   }

  function onPress() {
    if (!props.disabled && typeof props.onPress === 'function') {
      props.onPress();
    }
  }

  return (
    <TouchableOpacity
      style={[
        styles.default,
        props.style,
        props.disabled ? styles.disabled : null,
      ]}
      onPress={onPress}>
      {props.loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={[styles.buttonText, props.textStyle]}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: colors.white,
    padding: 18,
    paddingLeft: 20,
    paddingRight: 20,
    //width: '100%',
    marginTop: 10,
    //borderRadius: 18,
    height:'auto'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  primary: {
    backgroundColor: colors.lightBlue,
  },
  textPrimary: {
    color: colors.white,
  },
  link: {
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: null,
    width: 'auto',
    //borderBottomWidth: 1,
    //borderBottomColor: colors.darkGrey,
  },
  textLink: {
    color: colors.lightBlue,
  },
  disabled: {
    backgroundColor: colors.faintBlue,
  },
});
