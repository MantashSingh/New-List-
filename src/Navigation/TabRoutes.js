import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile , Home , List , Search} from "../Screens/index";
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import { connect } from 'react-redux';
import navigationStrings from '../constants/navigationStrings';


// import imagePath from '../constants/imagePath';
// import colors from '../constants/color';

const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  const{themeColor} = props
  return (

    <Tab.Navigator tabBarOptions={{
      keyboardHidesTabBar:true,
      activeTintColor: !!themeColor?themeColor:colors.themeColor,

  }}
  >
   
      <Tab.Screen
        name={navigationStrings.LIST}
        component={List}
        options={{
        tabBarIcon: ({ focused }) => (
          <Image source={imagePath.list}
              style={{width: 25,
                height: 25,
                marginTop: 10,  
                tintColor: focused ? (!!themeColor?themeColor:colors.themeColor) : "gray",}}
          />
        )}}
        />

<Tab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
        tabBarIcon: ({ focused }) => (
          <Image source={imagePath.search}
              style={{width: 25,
                height: 25,
                marginTop: 10,  
                tintColor: focused ? (!!themeColor?themeColor:colors.themeColor) : "gray",}}
          />
        )}}
        />
     

      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={imagePath.home}
                style={{width: 25,
                  height: 25,
                  marginTop: 10,  
                  tintColor: focused ? (!!themeColor?themeColor:colors.themeColor): "gray",}}
            />
          )}}
      /> */}
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={imagePath.profile}
                style={{width: 25,
                  height: 25,
                  marginTop: 10,  
                  tintColor: focused ? (!!themeColor?themeColor:colors.themeColor) : "gray",}}
            />
          )}}
      />


    </Tab.Navigator>
  );
}

const mapStateToProps=state=>{
  return {
     
      themeColor:state.auth.themeColor,
  }
}

export default connect(mapStateToProps)(TabRoutes);

const styles = StyleSheet.create({
  Icon: {
    
  },
});
