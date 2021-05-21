/*******************************************************************************
* File Name      : Login.js                                                    *
* Created Date   : Tuesday, May 18th 2021, 2:30:52 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : Login Scene 입니다.

import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button
} from "react-native";
import { REGISTER_SCREEN_NAME } from '../utils/NavigationNames';

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 80,
        width: "90%",
        margin: 20,
        padding: 20,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 20
    }
});

export default function (props) {
    const navigation = useNavigation();
    console.log( props.store );
    return (
        <SafeAreaView style={Styles.container}>
            <TextInput style={Styles.input} placeholder="아이디를 작성해주세요!" />
            <TextInput style={Styles.input} placeholder="비밀번호를 작성해주세요" />
            <Button title="로그인" onPress={()=>{ navigation.navigate(REGISTER_SCREEN_NAME)}} />
            <Button title="회원가입" onPress={()=>{ navigation.navigate(REGISTER_SCREEN_NAME)}} />
        </SafeAreaView>
    )
}