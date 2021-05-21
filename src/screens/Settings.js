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
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView } from "react-native";
import { AUTH_NAVIGATION_NAME } from '../utils/NavigationNames';

// ! ScrollView는
// Description : 초기 설정 Scene입니다.

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray"
    }
});


export default function () {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={Styles.container}>
            <Text>Setting입니다.</Text>
            <Text onPress={()=>(navigation.navigate(AUTH_NAVIGATION_NAME))}>LogOut</Text>
        </SafeAreaView>
    )
}