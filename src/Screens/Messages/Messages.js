import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import ChatCard from '../../Component/ChatCard';
import Header from '../../Component/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';


export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          profieId: 1,
          profileName: 'Salman',
          profilePic: imagePath.image1,
          profileTime: '09:30 am',
          ProfileDesc: 'Hello Salman i need your help',
          select: false,
        },
        {
          profieId: 2,
          profileName: '+917856454323',
          profilePic: imagePath.image2,
          profileTime: '11:30 am',
          ProfileDesc: 'Hello',
          select: false,
        },
        {
          profieId: 3,
          profileName: 'Farman',
          profilePic: imagePath.image3,
          profileTime: '12:38 pm',
          ProfileDesc: 'How Are You?',
          select: false,
        },
        {
          profieId: 4,
          profileName: 'Mantash',
          profilePic: imagePath.image4,
          profileTime: '09:56 pm',
          ProfileDesc: 'What do you want?',
          select: false,
        },
        {
          profieId: 5,
          profileName: 'Girraj',
          profilePic: imagePath.image1,
          profileTime: '11:33 am',
          ProfileDesc: 'Can i call you?',
          select: false,
        },
        {
          profieId: 6,
          profileName: 'Ashif',
          profilePic: imagePath.image2,
          profileTime: '08:17AM',
          ProfileDesc: 'I am busy',
          select: false,
        },
        {
          profieId: 7,
          profileName: 'Nadeem',
          profilePic: imagePath.image3,
          profileTime: '09:30AM',
          ProfileDesc: 'I need some Money',
          select: false,
        },
        {
          profieId: 8,
          profileName: 'Shakir',
          profilePic: imagePath.image4,
          profileTime: '09:30AM',
          ProfileDesc: 'Whats your Name ?',
          select: false,
        },
        {
          profieId: 9,
          profileName: 'Arshad',
          profilePic: imagePath.image2,
          profileTime: '09:30AM',
          ProfileDesc: 'Hello i am using whatsapp',
          select: false,
        },
        {
          profieId: 10,
          profileName: 'Salman 1',
          profilePic: imagePath.image1,
          profileTime: '09:30AM',
          ProfileDesc: 'I am from saharanpur',
          select: false,
        },
        {
          profieId: 11,
          profileName: 'Salman 2',
          profilePic: imagePath.image3,
          profileTime: '09:30AM',
          ProfileDesc: 'And you',
          select: false,
        },
        {
          profieId: 12,
          profileName: 'Salman 3',
          profilePic: imagePath.image2,
          profileTime: '09:30AM',
          ProfileDesc: 'i am developer',
          select: false,
        },
        {
          profieId: 13,
          profileName: 'Salman 4',
          profilePic: imagePath.image1,
          profileTime: '09:30AM',
          ProfileDesc: 'Can we meet',
          select: false,
        },
        {
          profieId: 14,
          profileName: 'Salman 5',
          profilePic: imagePath.image4,
          profileTime: '09:30AM',
          ProfileDesc: 'Lets Do some Fun',
          select: false,
        },
        {
          profieId: 15,
          profileName: 'Salman 6',
          profilePic: imagePath.image2,
          profileTime: '09:30AM',
          ProfileDesc: 'I have a Bike',
          select: false,
        },
        {
          profieId: 16,
          profileName: 'Salman 7',
          profilePic: imagePath.image1,
          profileTime: '09:30AM',
          ProfileDesc: 'I am very fast learner',
          select: false,
        },
        {
          profieId: 17,
          profileName: 'Salman 8',
          profilePic: imagePath.image3,
          profileTime: '09:30AM',
          ProfileDesc: 'I want to meet You',
          select: false,
        },
      ],
    };
  }

  _openDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };
  _onNevigation=(obj)=>{
    this.props.navigation.navigate( navigationStrings.CHAT, {
        data: obj
      });
  }

  render() {
      const{data} = this.state
    return (
      <View style={{flex:1}}>
        <Header
          textData={strings.MESSAGES}
          showDrawer={'true'}
          _openDrawer={this._openDrawer}
        />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => item.profieId}
          //   ItemSeparatorComponent={() => <View style={{marginTop:10}} />}
          renderItem={({item}) => <ChatCard data={item} _onNevigation={this._onNevigation}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
