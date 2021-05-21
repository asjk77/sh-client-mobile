/*******************************************************************************
* File Name      : Init.js                                                     *
* Created Date   : Tuesday, May 18th 2021, 2:31:02 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import {
    AUTH_NAVIGATION_NAME,
    HOME_NAVIGATION_NAME
} from '../utils/NavigationNames';
import { useNavigation } from '@react-navigation/core';

import 'sh-api';

// Description : 초기 설정 Scene입니다.

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    logo: {
        width: 200,
        height: 100
    }
});

const Logo = () => {
    return (
        <Image style={Styles.logo} source={require('../../assets/test_logo.jpg')}></Image>
    )
}
export default class Init extends React.Component {
    state = { isLoading : false };
    
    componentDidMount() {
        // 초기 로딩을 진행합니다.
    }


    render() {
    const { navigation } = this.props;
    // const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <Logo/>
            {this.state.isLoading ?
                <ActivityIndicator size="large"/> :
                <Text onPress={()=>{ navigation.navigate(HOME_NAVIGATION_NAME)}}>입장</Text> }
        </View>
    )
    }
}
