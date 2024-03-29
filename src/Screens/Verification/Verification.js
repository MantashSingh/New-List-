import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import Header from '../../Component/Header';

import actions from '../../redux/actions';
import {showMessage, hideMessage} from 'react-native-flash-message';

import OTPTextView from 'react-native-otp-textinput';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import CustomButton from '../../Component/CustomButton';
import fontFamily from '../../styles/fontFamily';

export default class VerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  state = {
    inputText: '',
    isvalid:""
  };

  checkData = () => {
    // alert()
    const {userId} = this.props.route.params;
    const {otpInput} = this.state;
    
    this.setState({
      isvalid:true
  })

    actions
      .OTPVerify({userId, otp: otpInput, deviceToken: '123'})
      .then(response => {
        console.log(response, '   verify');
      
        this.setState({  isvalid:false })
        showMessage({
          type: 'success',
          message: 'OTP verified ',
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
  };

  render() {
    const {isvalid} = this.state;
    const {phoneNumber} = this.props.route.params;

    return (
      <View>
        <Header
          textData={strings.ENTER_VERIFICATION_CODE}
          onBack={() => this.handleBackButtonClick()}
        />

        <View style={{marginVertical: 30}}>
          <Text style={styles.sentCode}>
            {strings.WE_HAVE_SENT_A_VERIFICATION_CODE}{' '}
          </Text>
          <Text style={styles.phone}>+91-{phoneNumber}</Text>
        </View>

        <View>
          <View style={styles.container}>
            <OTPTextView
              ref={e => (this.input1 = e)}
              containerStyle={styles.textInputContainer}
              textInputStyle={[styles.roundedTextInput, {borderRadius: 100}]}
              handleTextChange={text => this.setState({otpInput: text})}
              inputCount={5}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View>
          <Text style={styles.footer1}>{strings.DONT_RECEIVE_THE_CODE}</Text>

          <CustomButton
            buttonText={strings.GO_TO_HOMEPAGE}
            onButtonCLick={() => this.checkData() }
            isvalid={isvalid}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sentCode: {
    fontFamily:fontFamily.regular,
    textAlign: 'center',
    fontSize: 20,
  },
  phone: {
    fontFamily:fontFamily.bold,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 5,
   
  },
  footer1: {
    fontFamily:fontFamily.regular,
    textAlign: 'center',
    marginVertical: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    padding: 5,
  },

  textInputContainer: {
    marginBottom: 20,
    
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 3,
    
  },
});
