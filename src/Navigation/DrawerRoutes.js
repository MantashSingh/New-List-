import React from 'react';

import navigationStrings from '../constants/navigationStrings';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Graph, QrCode, ZoomIn, Messages, Chat} from '../Screens';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <Drawer.Navigator initialRouteName={navigationStrings.MESSAGES}>
      {/* <Drawer.Screen name={navigationStrings.LIST} component={List} />
        <Drawer.Screen name={navigationStrings.SEARCH} component={Search} />
        <Drawer.Screen name={navigationStrings.PROFILE} component={Profile} /> */}

      <Drawer.Screen name={navigationStrings.GRAPH} component={Graph} />
      <Drawer.Screen name={navigationStrings.QR_CODE} component={QrCode} />
      <Drawer.Screen name={navigationStrings.ZOOM_IN} component={ZoomIn} />
      <Drawer.Screen name={navigationStrings.MESSAGES} component={Messages} />
      {/* <Drawer.Screen name={navigationStrings.CHAT} component={Chat}/> */}
      <Drawer.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
      />
    </Drawer.Navigator>
  );
}
