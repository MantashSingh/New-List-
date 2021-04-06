import React, { Component } from 'react'
import { Image, Dimensions , View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import imagePath from '../../constants/imagePath';
import Header from '../../Component/Header'
import strings from '../../constants/lang';

export default class ZoomIn extends Component {

    _openDrawer=()=>{
        const{navigation} = this.props
        navigation.openDrawer()
      }

    render() {
        return (
            <View>
                 <Header textData={strings.ZOOM} showDrawer={true}  _openDrawer={this._openDrawer}/>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={imagePath.facebook}/>
            </ImageZoom>
            </View>
        )
    }
}

// const styles = StyleSheet.create({})
