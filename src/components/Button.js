/*******************************************************************************
* File Name      : Button.js                                                   *
* Created Date   : Sunday, May 23rd 2021, 8:04:39 am                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : Button class 입니다.

import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

const ListButton = (props) => {
    const { title, onPress } = props;
    return(
    <TouchableOpacity style={ {
        width:"90%",
        height:50,
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
        }} onPress={onPress} >
        <Text style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
        }}>{title}</Text>
    </TouchableOpacity>
    );
}

export default ListButton;