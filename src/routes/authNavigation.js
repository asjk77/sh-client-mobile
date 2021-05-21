/*******************************************************************************
* File Name      : authNavigation.js                                           * 
* Created Date   : Monday, May 17th 2021, 9:19:49 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : AuthNavigator 

import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen  from "../screens/Login";
import RegisterScreen from "../screens/Register";
import {
    LOGIN_SCREEN_NAME,
    REGISTER_SCREEN_NAME
} from "../utils/NavigationNames";


const Stack = createStackNavigator();

export default AuthNavigation => {
    return (
    <Stack.Navigator initialRouteName={LOGIN_SCREEN_NAME} headerMode={false}>
        <Stack.Screen name={LOGIN_SCREEN_NAME} component={LoginScreen}/>
        <Stack.Screen name={REGISTER_SCREEN_NAME} component={RegisterScreen}/>
    </Stack.Navigator>
    );
}