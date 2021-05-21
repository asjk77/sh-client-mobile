/*******************************************************************************
* File Name      : rootNavigation.js                                            *
* Created Date   : Monday, May 17th 2021, 9:14:58 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/
// Description : rootNavigator를 정의합니다.

import React from 'react'; 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from "./authNavigation";
import HomeNavigation from "./homeNavigation";
import Init from  '../screens/Init';
import {
    INIT_SCREEN_NAME,
    AUTH_NAVIGATION_NAME,
    HOME_NAVIGATION_NAME

} from "../utils/NavigationNames";
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={INIT_SCREEN_NAME} headerMode={false} mode="card" >
        <Stack.Screen name={INIT_SCREEN_NAME} component={Init}/>
        <Stack.Screen name={AUTH_NAVIGATION_NAME} component={AuthNavigation}/>
        <Stack.Screen name={HOME_NAVIGATION_NAME} component={HomeNavigation}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}
