/*******************************************************************************
* File Name      : AboutApp.js                                                 *
* Created Date   : Sunday, May 23rd 2021, 8:46:51 am                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : AboutApp.js
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native';

const AboutApp = () => {
    return (
        <SafeAreaView>
            <Text>React Demo App</Text>
            <Text>application version 1.0.0</Text>
            <Text>프로젝트 특징.. 초반에 </Text>
        </SafeAreaView>
    )
}

export default AboutApp;
