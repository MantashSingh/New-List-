import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Routes from './src/Navigation/Routes'
import FlashMessage from "react-native-flash-message";

import { clearUserData, getUserData } from './src/utils/utils';
import store from './src/redux/store';
import { connect , Provider } from 'react-redux';
import types from './src/redux/types';

import SplashScreen from 'react-native-splash-screen'
import { getFCMToken } from './src/utils/pushNotification';
const { dispatch } = store;
export default class App extends Component {
  componentDidMount() {
    getFCMToken()

    
    getUserData().then((userData) => {
      if (userData) {
        
        dispatch({
          type: types.OTP_VERIFY,
          payload: userData 
        })
        SplashScreen.hide();
      }
      
      else{SplashScreen.hide();}
    })
    
    
    
//comment added in main

  }

  render() {
    return (
      <Provider store={store }>
      <Routes/>
      <FlashMessage position="top" />
</Provider>
    )
  }
} 


const styles = StyleSheet.create({})
