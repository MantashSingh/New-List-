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
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
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
        <View
          style={{
            ...styles.topView,
            backgroundColor: !!themeColor ? themeColor : colors.themeColor,
          }}>
          <Image source={imagePath.user} style={styles.user} />
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

          <View style={styles.orWithLine}>
            <View
              style={{
                ...styles.orText,
                backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              }}></View>
            <Text
              style={{color: !!themeColor ? themeColor : colors.themeColor}}>
              {strings.OR}
            </Text>
            <View
              style={{
                ...styles.orBottom,
                backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              }}></View>
          </View>

          <TouchableOpacity
            style={{
              ...styles.emailTouch,
              backgroundColor: !!themeColor ? themeColor : colors.themeColor,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={imagePath.mail} style={styles.mailImg} />
              <Text style={styles.emailText}>
                {' '}
                {strings.CONTINUE_WITH_EMAIL}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <TouchableOpacity
              style={{
                ...styles.facebookTouch,
                backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={imagePath.facebook} style={styles.mailIcon} />
                <Text style={styles.facebokText}>{strings.FACEBOOK} </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.googleTouch,
                backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={imagePath.google} style={styles.mailIcon} />
                <Text style={styles.googleText}> {strings.GOOGLE}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              ...styles.agree,
              color: !!themeColor ? themeColor : colors.themeColor,
            }}>
            {strings.BY_CONTIUING_YOU_AGREE_TO_OUR}{' '}
          </Text>

          <View style={styles.termsView}>
            <Text
              style={{color: !!themeColor ? themeColor : colors.themeColor}}>
              {strings.TERMS_OF_SERVICES}
            </Text>
            <Text
              style={{
                ...styles.termsText,
                color: !!themeColor ? themeColor : colors.themeColor,
              }}>
              {' '}
              {strings.PRIVACY_POLICY}
            </Text>
            <Text
              style={{
                ...styles.termsText,
                color: !!themeColor ? themeColor : colors.themeColor,
              }}>
              {' '}
              {strings.CONTENT_POLICY}{' '}
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
  topView: {
    flex: 1,
  },
  termsText: {
    borderStyle: 'dashed',
    borderBottomColor: colors.headerIcon,
    borderBottomWidth: 1,
    marginRight: 5,
  },
  agree: {
    textAlign: 'center',
    marginTop: 10,
  },
  termsView: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  googleTouch: {
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  orBottom: {
    height: 1,
    width: 125,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  facebookTouch: {
    height: 50,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  orText: {
    height: 1,
    width: 125,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  mailImg: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 10,
    tintColor: colors.headerIcon,
  },
  emailTouch: {
    height: 50,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  orWithLine: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 30,
    opacity: 0.5,
  },
  user: {
    width: 90,
    height: 90,
    tintColor: colors.headerIcon,
    alignSelf: 'center',
    marginTop: 40,
  },
  footer: {
    flex: 2,

    position: 'absolute',
    top: moderateScaleVertical(220),
    paddingTop: 70,
    backgroundColor: colors.headerIcon,

    borderTopLeftRadius: 100,
    width: '100%',
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
    color: colors.headerIcon,
    fontSize: 18,
    marginLeft: 35,
    fontFamily:fontFamily.semi,
    marginTop: 12,
  },

  facebokText: {
    color: colors.headerIcon,
    fontSize: 15,
    marginLeft: 15,
    fontFamily:fontFamily.semi,
    marginTop: 14,
    marginRight: 10,
  },
  googleText: {
    color: colors.headerIcon,
    fontSize: 15,
    marginLeft: 15,
    marginRight: 20,
    fontFamily:fontFamily.semi,
    marginTop: 14,
  },
});
