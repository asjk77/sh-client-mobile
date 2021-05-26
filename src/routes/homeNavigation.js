/*******************************************************************************
* File Name      : homeNavigation.js                                           *
* Created Date   : Monday, May 17th 2021, 8:19:37 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : mainRoute를 정의합니다.

import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ShowPostsScreen from "../screens/ShowPosts";
import SettingsScreen from "../screens/Settings";
import WritePostScreen from "../screens/WritePost";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import {
    SETTINGS_NAVIGATION_NAME,
    SHOW_POST_SCREEN_NAME,
    WRITE_POST_SCREEN_NAME
} from "../utils/NavigationNames";
import SettingNavigation from './settingNavigation';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
    return (
    <Tab.Navigator initialRouteName={WRITE_POST_SCREEN_NAME}>
        <Tab.Screen
            name={WRITE_POST_SCREEN_NAME}
            component={WritePostScreen}
            options={{
                tabBarLabel: '글 작성',
                tabBarIcon: ( {color, size} ) => ( <FeatherIcons name="edit" color={color} size={size} />)
            }}
            />

        <Tab.Screen
            name={SHOW_POST_SCREEN_NAME}
            component={ShowPostsScreen}
            options={{
                tabBarLabel: '글 목록',
                tabBarIcon: ( {color, size} ) => ( <SimpleLineIcons name="list" color={color} size={size} />)
            }}
            />
        <Tab.Screen
            name={SETTINGS_NAVIGATION_NAME}
            component={SettingNavigation}
            options={{
                tabBarLabel: '설정',
                tabBarIcon: ( {color, size} ) => ( <MaterialIcons name="settings" color={color} size={size} />)
            }}
            />
    </Tab.Navigator>
    );
};

export default HomeNavigation;