/*******************************************************************************
* File Name      : Register.js                                                 *
* Created Date   : Tuesday, May 18th 2021, 2:30:08 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 회원가입 Screen을 정의합니다.
import React from 'react';
import { View, Text, StyleSheet } from "react-native";

// Description : 초기 설정 Scene입니다.

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default function () {
    return (
        <View style={Styles.container}>
            <Text>Register</Text>
        </View>
    )
}