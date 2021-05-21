/*******************************************************************************
* File Name      : login.js                                                    *
* Created Date   : Tuesday, May 4th 2021, 5:28:00 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description 
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
    ScrollView
} from "react-native";

// ! ScrollView는
// Description : 초기 설정 Scene입니다.

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",

    },
    scrollView: {
        backgroundColor: "pink",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: "100%"
    },
    scrollViewEx: {
        width: "100%"
    },
    // ! 리액트에 발생한 버그임 ScrollView에서 Width값은 처리가 안됩니다.
    card : {
        width: "90%",
        height: 400,
        backgroundColor: "whitesmoke",
        borderRadius: 20,
        marginBottom: "10%",
        marginTop: "10%"
    }
});

const Card = ( ) => (
    <View style={Styles.card}></View>
)

export default function () {
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView style={Styles.scrollViewEx} contentContainerStyle={Styles.scrollView}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>
        </SafeAreaView>
    )
}