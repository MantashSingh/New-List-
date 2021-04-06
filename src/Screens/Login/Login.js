import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import TextInputComponent from '../../Component/TextInputComponent';
import strings from '../../constants/lang';
import CustomButton from '../../Component/CustomButton';
import {showMessage, hideMessage} from 'react-native-flash-message';
import validations from '../../utils/validations';
import actions from '../../redux/actions';
import imagePath from '../../constants/imagePath';
import {connect} from 'react-redux';
import colors from '../../styles/colors';
import{moderateScale , moderateScaleVertical , scale} from "../../styles/responsiveSize"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',

      isvalid: '',
    };
  }

  setNumber = text => {
    this.setState({
      phoneNumber: text,
    });
  };

  isValidate = () => {
    const {phoneNumber} = this.state;

    let errorMessage = validations({phoneNumber: phoneNumber});
    // alert()
    this.setState({
      isvalid: true,
    });
    if (errorMessage) {
      this.setState({isvalid: false});
      showMessage({
        message: errorMessage,
        icon: 'warning',
        type: 'danger',
      });
      return false;
    }

    return true;
  };

  checkData = () => {
    const {phoneNumber} = this.state;
    // alert("hi")

    if (this.isValidate()) {
      actions
        .loginWithOTP({
          contactDetails: {
            phoneNo: phoneNumber,
            countryCode: '+91',
            countryCodeISO: 'IN',
          },
        })
        .then(response => {
          this.setState({isvalid: false});

          // console.log(response +"   1")
          this.props.navigation.navigate('Verification', {
            userId: response.data.userId,
            phoneNumber: phoneNumber,
          });

          showMessage({
            type: 'success',
            message: 'OTP sent successfully ',
          });
        })
        .catch(error => {
          this.setState({isvalid: false}),
            showMessage({
              type: 'danger',
              message: 'Login failed ',
            });

          console.log(error);
        });
    }
  };

  render() {
    const {themeColor} = this.props;
    const {isvalid} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={{
      flex:1,
      backgroundColor:!!themeColor ? themeColor : colors.themeColor,
  
      
  }}>
          <Image source={imagePath.user} style={styles.user}/>
        </View>
        <View style={styles.footer}>
        <View style={styles.container}>
          <View style={styles.input}>
            <TextInputComponent
              placeholder={strings.ENTER_PHONE_NUMBER}
              keyboardType={'numeric'}
              onChangeText={this.setNumber}
            />
          </View>
          <CustomButton
            buttonText={strings.SEND_OTP}
            onButtonCLick={() => this.checkData()}
            isvalid={isvalid}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            marginLeft: 30,
            opacity: 0.5,
          }}>
          <View
            style={{
              height: 1,
              width: 125,
              backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              marginVertical: 10,
              marginHorizontal: 10,
            }}></View>
          <Text
            style={{
              color: !!themeColor ? themeColor : colors.themeColor,
            }}>
            OR
          </Text>
          <View
            style={{
              height: 1,
              width: 125,
              backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              marginVertical: 10,
              marginHorizontal: 10,
            }}></View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: !!themeColor ? themeColor : colors.themeColor,
            height: 50,
            marginHorizontal: 30,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={imagePath.mail}
              style={{
                width: 30,
                height: 30,
                marginLeft: 20,
                marginTop: 10,
                tintColor: 'white',
              }}
            />
            <Text style={styles.emailText}> Continue with Email</Text>
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              height: 50,
              marginHorizontal: 10,
              borderRadius: 5,
              marginTop: 10,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={imagePath.facebook} style={styles.mailIcon} />
              <Text style={styles.facebokText}>Facebook </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              height: 50,
              marginHorizontal: 5,
              borderRadius: 10,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={imagePath.google} style={styles.mailIcon} />
              <Text style={styles.googleText}> Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: !!themeColor ? themeColor : colors.themeColor,
            textAlign: 'center',
            marginTop: 10,
          }}>
          By continuing , you agree to our{' '}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 30,
            marginBottom: 20,
          }}>
          <Text
            style={{
              borderStyle: 'dashed',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              marginRight: 5,
              color: !!themeColor ? themeColor : colors.themeColor,
            }}>
            Terms of Service
          </Text>
          <Text
            style={{
              borderStyle: 'dashed',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              marginRight: 5,
              color: !!themeColor ? themeColor : colors.themeColor,
            }}>
            {' '}
            Privacy Policy{' '}
          </Text>
          <Text
            style={{
              borderStyle: 'dashed',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              marginRight: 5,
              color: !!themeColor ? themeColor : colors.themeColor,
            }}>
            {' '}
            Content Policy{' '}
          </Text>
        </View>
      </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  user:{
    width:90,
    height:90,
    tintColor:"white",
    alignSelf:'center',
    marginTop:40
  },
  footer:{
    flex:2,
    
    position: 'absolute',
    top:moderateScaleVertical(220),
    paddingTop:70,
    backgroundColor:"white",

 borderTopLeftRadius: 100,
 width:"100%"
 
  },
  container: {
    // backgroundColor:"green",
    marginTop: 'auto',
    // marginBottom: 'auto',
  },

  mailIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 10,
  },

  emailText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 35,

    marginTop: 12,
  },

  facebokText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 15,

    marginTop: 14,
    marginRight: 10,
  },
  googleText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 15,
    marginRight: 20,

    marginTop: 14,
  },
});
