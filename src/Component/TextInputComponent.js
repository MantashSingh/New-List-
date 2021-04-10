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
      style={{...styles.input , borderColor: !!themeColor ? themeColor : colors.themeColor,marginHorizontal:!!marginHor?5:30,}}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onFocus={onfocus}
      value={value}
      keyboardType={keyboardType}></TextInput>
  );
}const styles = StyleSheet.create({
  input:{
    borderWidth: 0.4,
    marginTop: 10,
    paddingLeft: 20,
    fontSize: 18,
    backgroundColor: colors.textInputBg,
    borderRadius: 10,
  }
})

const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(TextInputComponent);
