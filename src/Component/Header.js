import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';


function Header(props) {
  const {textData="",  themeColor="" , _openDrawer=()=>{}, showDrawer=""} = props;
  return (
    <View style={{ backgroundColor:!!themeColor ? themeColor : colors.themeColor , marginBottom:0 ,   flexDirection:'row'}} >
      
      
      <TouchableOpacity onPress={()=>_openDrawer()} >
      {!!showDrawer?
      <Image source={imagePath.menu} 
      style={styles.back}/>:<Image source={imagePath.backIcon} 
        style={styles.back}/>

      }
    </TouchableOpacity>
      
      
      <Text
        style={styles.textData}>
        {textData}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  back:{
    width: 30,
    height: 30,
    marginVertical: moderateScaleVertical(10),
    marginHorizontal: moderateScaleVertical(20),
    tintColor:colors.headerIcon,
  
  },
  textData:{
    marginVertical: moderateScaleVertical(10),
    marginHorizontal: moderateScaleVertical(10),
    
    fontSize: 20,
    color: "white",
    textAlign:'center',
    fontFamily:fontFamily.semi,
    
  }
})

const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(Header);

