import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Chat} from '../Screens';
import {search} from '../redux/actions/auth';
import DrawerRoutes from './DrawerRoutes';

const Stack = createStackNavigator();
export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.DRAWER_ROUTES}
        options={{headerShown: false}}
        component={DrawerRoutes}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={navigationStrings.CHAT}
        component={Chat}
      />
    </Stack.Navigator>
  );
}

// const Drawer = createDrawerNavigator();

// export default function() {
//   return (

//       <Drawer.Navigator initialRouteName={navigationStrings.MESSAGES}>
//         {/* <Drawer.Screen name={navigationStrings.LIST} component={List} />
//         <Drawer.Screen name={navigationStrings.SEARCH} component={Search} />
//         <Drawer.Screen name={navigationStrings.PROFILE} component={Profile} /> */}

//         <Drawer.Screen name={navigationStrings.GRAPH} component={Graph}/>
//         <Drawer.Screen name={navigationStrings.QR_CODE} component={QrCode}/>
//         <Drawer.Screen name={navigationStrings.ZOOM_IN} component={ZoomIn}/>
//         <Drawer.Screen name={navigationStrings.MESSAGES} component={Messages}/>
//         <Drawer.Screen name={navigationStrings.CHAT} component={Chat}/>
//         <Drawer.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes}/>

//       </Drawer.Navigator>

//   );
// }
