import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Component/Header'
import strings from '../../constants/lang';
import QRCode from 'react-native-qrcode-svg';


export default class QrCode extends Component {
    _openDrawer=()=>{
        const{navigation} = this.props
        navigation.openDrawer()
      }

    render() {
        return (
            <View>
                  <Header textData={strings.QR_CODE} showDrawer={true}  _openDrawer={this._openDrawer}/>
                <Text> QrCode </Text>
                {/* <View style={styles.}> */}
                <QRCode
      value="http://awesome.link.qr"
    />
    </View>
            // </View>
        )
    }
}

const styles = StyleSheet.create({})
