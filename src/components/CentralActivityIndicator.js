/*******************************************************************************
* File Name      : CentralActivityIndicator.js                                 *
* Created Date   : Sunday, May 23rd 2021, 10:37:42 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 중앙 activity indicator 입니다.
import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function CentralActivityIndicator () {
    return (
                <ActivityIndicator style={{
                    position: 'absolute',
                    bottom: "50%",
                    alignSelf: 'center'
                }} size="large" />
    );
}