import React from 'react';
import { Button, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import { Login, Verification} from '../Screens/index';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
    <React.Fragment>
       
       
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.VERIFICATION} component={Verification} />

      


    </React.Fragment>

    </Stack.Navigator>
  );
}

export default AuthStack;