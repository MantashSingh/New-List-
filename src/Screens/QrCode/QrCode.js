import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import CustomButton from '../../Component/CustomButton';

export default class QrCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScanner: 'false',
    };
  }

  _openDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };

  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  _onQrCodeButtonClick = () => {
    const {showScanner} = this.state;
    this.setState({showScanner: !showScanner});
    console.log(showScanner);
  };

  render() {
    const {showScanner} = this.state;
    return (
      <View style={{flex:1}}>
        <Header
          textData={strings.QR_CODE}
          showDrawer={true}
          _openDrawer={this._openDrawer}
        />
        {/* <Text> QrCode </Text> */}
        <View style={styles.qr}>
          <QRCode value="http://awesome.link.qr" />
        </View>
        

       <View style={{height:200 , flex:1 }}>
       {showScanner && 
          
          <QRCodeScanner
     onRead={this.onSuccess}
     flashMode={RNCamera.Constants.FlashMode.auto}
   />
     }
       </View>

        <View style={styles.button}>
          <CustomButton
            buttonText={!showScanner?strings.OPEN_SCANNER:strings.CLOSE_SCANNER}
            onButtonCLick={()=>this._onQrCodeButtonClick()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  qr: {
    alignItems: 'center',
    marginVertical: 20,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  button: {
    marginTop:"auto",
    marginBottom:20,
  },
});
