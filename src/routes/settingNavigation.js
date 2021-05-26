/*******************************************************************************
* File Name      : settingNavigation.js                                        *
* Created Date   : Sunday, May 23rd 2021, 8:40:39 am                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : Setting navigations

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ABOUT_APP_SCREEN_NAME,
    ACCOUNT_INFO_SCREEN_NAME,
    SETTINGS_NAVIGATION_NAME
} from '../utils/NavigationNames';
import AboutApp from '../screens/AboutApp';
import AccountInfo from '../screens/AccountInfo';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const SettingNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={SETTINGS_NAVIGATION_NAME} headerMode={false}>
            <Stack.Screen
                name={SETTINGS_NAVIGATION_NAME}
                component={Settings}
            />
            <Stack.Screen
                name={ABOUT_APP_SCREEN_NAME}
                component={AboutApp}
            />
            <Stack.Screen
                name={ACCOUNT_INFO_SCREEN_NAME}
                component={AccountInfo}
            />
        </Stack.Navigator>
    )
}

export default SettingNavigation;
