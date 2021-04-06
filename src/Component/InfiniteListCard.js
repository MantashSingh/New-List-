import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';

function InfiniteListCard(props) {
  const {data, themeColor} = props;
  return (
    //   <View style={{
    //     flex:1,

    //   borderRadius: 10,
    //   shadowColor: !!themeColor ? themeColor : colors.themeColor,
    //   shadowOffset: {
    //     width: 0,
    //     height: 1,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,

    //   elevation: 5,
    //   marginHorizontal:moderateScaleVertical(10),
    //   paddingVertical: moderateScaleVertical(10),
    //   flexDirection: 'row',
    // }
    //       }>
    //     <Image
    //       source={{uri: data.profileImg[1].original}}
    //       style={styles.profileImage}
    //     />
    //     <View style={{flexDirection:'column'}}>
    //     <Text  style={styles.name}>Name :{data.fullName}</Text>
    //     <Text>Talk to :{data.talkTo}</Text>
    //     <Text>Lives In :{data.addressDetails.city}</Text>
    //     <Text>Date Of Birth : {data.dob.date}/{data.dob.month}/{data.dob.year}</Text>
    //     <Text >Gender: {data.gender}</Text>

    //     </View>

    //   </View>

    //   <View style={{
    //     borderWidth:1,
    //     marginHorizontal:5,
    //     marginVertical:5,
    //     borderRadius:20,
    //     padding:10,
    //     borderColor:!!themeColor ? themeColor : colors.themeColor
    //   }}>
    //     <View style={{flexDirection:'row'}}>
    //     <Text style={styles.name}>{data.fullName}</Text>
    //     <Text style={styles.age}>{2021 - data.dob.year } Years | </Text>
    //     <Image source={imagePath.save} style={{
    //   width:10,
    //   height:20,
    //   marginTop:8,
    //   marginRight:10,
    //   tintColor:!!themeColor ? themeColor : colors.themeColor
    // }}/>

    //     </View>
    //     <View style={{flexDirection:'row' }}>
    //       <View style={{flexDirection:"column"}}>

    //       <Text style={styles.gender} >{data.gender}</Text>
    //       <Text style={styles.loc}>{data.addressDetails.city}</Text>
    //       <Text style={styles.loc}>Talk to :{data.talkTo}</Text>

    //       </View>
    //       <Image source={{uri: data.profileImg[1].original}} style={styles.dp}/>
    //     </View>
    //     <View style={{flexDirection:'row'}}>
    //       <TouchableOpacity >

    //       </TouchableOpacity>
    //     </View>
    //   </View>

    <View style={styles.container}>
      <View>
        <Image
          source={{uri: data.profileImg[1].original}}
          style={styles.profileImage}
        />
        </View>
        
      
      <View
        style={{
          backgroundColor: 'white',
          height: 90,
          marginHorizontal: 3,
          marginTop: -20,
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,

          paddingVertical: 10,
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.name}>{data.firstName}</Text>
          <Image source={imagePath.dot} style={styles.dot} />

          <View
            style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: !!themeColor ? themeColor : colors.themeColor,
              height: 27,
              paddingHorizontal: 8,
              paddingVertical: 3,
              marginLeft: 'auto',
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                color: !!themeColor ? themeColor : colors.themeColor,
              }}>
              75%
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.gender}>{data.gender}</Text>
          <Image source={imagePath.dot} style={styles.circle} />
          <Text style={styles.gender}> {2021 - data.dob.year}</Text>
        </View>
        <Text style={styles.gender}>{data.addressDetails.city}</Text>
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(InfiniteListCard);
const styles = StyleSheet.create({
  // name:{
  //   fontFamily:"OpenSans-Bold",
  //   fontSize:18,
  //   marginBottom:8

  // },
  // gender:{
  //   marginTop:30,
  //   fontFamily:"OpenSans-Regular",
  // },
  // age:{
  //   marginLeft:"auto",
  //   marginTop:5,
  //   fontFamily:"OpenSans-Regular",
  //   color:"gray"
  // },
  // dp:{
  //   width:100,
  //   height:100,
  //   marginLeft:'auto',
  //   marginRight:10,
  //   borderRadius:10

  // },
  // loc:{
  //   fontFamily:"OpenSans-Regular",
  // }
  profileImage: {
    height: 230,
    // width: 174,
    marginHorizontal: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E5EC',
  },
  name: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  circle: {
    width: 7,
    height: 7,
    marginTop: 7,
    marginLeft: 5,
    tintColor: 'grey',
  },
  dot: {
    tintColor: 'green',
    width: 10,
    height: 10,
    marginTop: 7,
    marginLeft: 5,
  },
  gender: {
    color: 'grey',
    fontFamily: 'OpenSans-Regular',
  },
});
