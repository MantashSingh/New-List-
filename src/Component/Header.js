import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';


function Header(props) {
  const {textData, onBack, themeColor , _openDrawer , showDrawer} = props;
  return (
    <View style={{ backgroundColor:!!themeColor ? themeColor : colors.themeColor , marginBottom:0 ,   flexDirection:'row'}} >
      
      {!!showDrawer&&
      <TouchableOpacity onPress={()=>_openDrawer()} >
      <Image source={imagePath.menu} 
      style={{
          width: 30,
          height: 30,
          marginVertical: moderateScaleVertical(10),
          marginHorizontal: moderateScaleVertical(20),
          tintColor: "white",
        
        }}/>
    </TouchableOpacity>
      }
      
      <Text
        style={{
          marginVertical: moderateScaleVertical(10),
          marginHorizontal: moderateScaleVertical(10),
          
          fontSize: 20,
          color: "white",
          textAlign:'center',
          fontFamily:"OpenSans-Bold",
          
        }}>
        {textData}
      </Text>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(Header);

