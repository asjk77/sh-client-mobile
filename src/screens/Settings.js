/*******************************************************************************
* File Name      : init.js                                                     *
* Created Date   : Tuesday, May 4th 2021, 5:33:56 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : initialize sceen 입니다.

import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Button} from "react-native";
import { ABOUT_APP_SCREEN_NAME, ACCOUNT_INFO_SCREEN_NAME, AUTH_NAVIGATION_NAME, INIT_SCREEN_NAME } from '../utils/NavigationNames';
import ListButton from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
// ! ScrollView는
// Description : 초기 설정 Scene입니다.

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent:"space-around",
    },
    buttonStyle: {
    }
});

export default function () {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={Styles.container}>
            <ListButton title="로그아웃" style={Styles.buttonStyle} 
                onPress={()=>{ navigation.navigate(INIT_SCREEN_NAME) }}/>
            <ListButton title="내 정보" style={Styles.buttonStyle}
                onPress={()=>{ navigation.navigate(ACCOUNT_INFO_SCREEN_NAME) }}/>
            <ListButton title="이 앱에 대하여" style={Styles.buttonStyle}
                onPress={()=>{ navigation.navigate(ABOUT_APP_SCREEN_NAME); }}/>
            <Text>copyright 2021. Hwang Sanho all right reserved.</Text>
        </SafeAreaView>
    )
    }