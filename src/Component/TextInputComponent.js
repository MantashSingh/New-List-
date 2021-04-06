import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import colors from '../styles/colors';

function TextInputComponent(props) {
  const {
    themeColor,
    placeholder,
    onChangeText,
    secureTextEntry,
    onfocus,
    value,
    keyboardType,
    marginHor
  } = props;
  return (
    <TextInput
      style={{
        borderColor: !!themeColor ? themeColor : colors.themeColor,
        borderWidth: 0.4,
        marginTop: 10,
        marginHorizontal:!!marginHor?5:30,
        paddingLeft: 20,
        fontSize: 18,
        backgroundColor: colors.textInputBg,
        borderRadius: 10,
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onFocus={onfocus}
      value={value}
      keyboardType={keyboardType}></TextInput>
  );
}
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(TextInputComponent);
