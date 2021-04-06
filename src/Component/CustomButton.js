import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import colors from '../styles/colors';
import Loader from './Loader';

function CustomButton(props) {
  const {themeColor, buttonText, onButtonCLick, isvalid} = props;

  return(
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: !!themeColor ? themeColor : colors.themeColor,
        height: 50,
        marginHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
      }}
      onPress={() => onButtonCLick()}>
      

      
      {isvalid ?   <Loader isvalid={true} />    :<Text style={styles.sendOTPText}>{buttonText}</Text>}
    </TouchableOpacity>
  </View>
  )
}
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(CustomButton);
const styles = StyleSheet.create({
  sendOTPText: {
    color: colors.buttonText,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 12,
  },
});
