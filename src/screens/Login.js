/*******************************************************************************
* File Name      : Login.js                                                    *
* Created Date   : Tuesday, May 18th 2021, 2:30:52 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : Login Scene 입니다.

import { useNavigation } from '@react-navigation/core';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button
} from "react-native";
import { HOME_NAVIGATION_NAME, INIT_SCREEN_NAME, REGISTER_SCREEN_NAME } from '../utils/NavigationNames';
import { connect } from 'react-redux';
import { login } from '../../lib/sh-server-api/src/auth';
import DismissKeyboardView from '../components/DissmiseKeyboardView';
import ListButton from '../components/Button';
import { setAccount } from '../actions/AccountActions';

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 80,
        width: "95%",
        margin: 20,
        padding: 20,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 20
    }
});

class Login extends Component {
    constructor(props) {
        super( props );
        this.email = null;
        this.passwd = null;
    } 
    setAccount = () => {
        const { navigation } = this.props;
        if ( this.email && this.passwd ) {
            // 로그인에 성공하였을 경우 set Account
            this.props.setAccount( this.email, this.passwd);
            navigation.navigate(INIT_SCREEN_NAME);
        }
    }
    render() {
        const { navigation } = this.props;
        
        return (
            <DismissKeyboardView style={Styles.container}>
                <TextInput
                    style={Styles.input}
                    placeholder="이메일를 작성해주세요!"
                    onChangeText={(text)=>{ this.email = text; }}
                    />
                <TextInput
                    style={Styles.input}
                    placeholder="비밀번호를 작성해주세요"
                    onChangeText={(text)=>{this.passwd = text; }}
                    />
                <ListButton style={{marginBottom: 30}} title="Next" onPress={this.setAccount} />
                <ListButton title="회원가입" onPress={()=>{ navigation.navigate(REGISTER_SCREEN_NAME)}} />
                <ListButton title="돌아가기" onPress={()=>{ navigation.goBack(); }} />
            </DismissKeyboardView>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    setAccount : ( email , passwd ) => dispatch(setAccount( email, passwd ) )
});
export default connect( null , mapDispatchToProps )(Login);
