/*******************************************************************************
* File Name      : home.js                                                     *
* Created Date   : Tuesday, May 4th 2021, 7:24:07 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 홈화면입니다.

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    titleInput: {
        width: "90%",
        height: 50,
        padding: 20,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 20
    },
    contentsInput: {
        width: "90%",
        height: 500,
        padding: 20,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 20
    }
});

export default function () {
    return (
        <SafeAreaView style={Styles.container}>
            <TextInput style={Styles.titleInput}
                placeholder="제목을 작성해 주세요!"
            />
            <TextInput
                style={Styles.contentsInput}
                placeholder="글 내용을 작성해주세요!"
            />
            <Text>
                글을 작성합니다.!
            </Text>
        </SafeAreaView>
    )
}