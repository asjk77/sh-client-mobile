/*******************************************************************************
* File Name      : Register.js                                                 *
* Created Date   : Tuesday, May 18th 2021, 2:30:08 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 회원가입 Screen을 정의합니다.

import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, View, Button, Alert } from "react-native";
import { connect } from 'react-redux';
import { register } from '../../lib/sh-server-api/src/auth';
import DismissKeyboardView from '../components/DissmiseKeyboardView';
import ListButton from '../components/Button'
import CentralActivityIndicator from '../components/CentralActivityIndicator';
import { INIT_SCREEN_NAME } from '../utils/NavigationNames';

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
    },
    text: {
        fontSize: 20,
        fontWeight: "bold" 
    }

});

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : false
        }
        this.email = 0;
        this.passwd = 0;
        this.firstname = 0;
        this.address = 0;
    }
    tryRegister = () => {
        if ( this.state.isLoading )
            return;

        this.setState(()=>{ return {...this.state, isLoading: true }; });

        if ( this.email &&
            this.passwd &&
            this.firstname &&
            this.lastname &&
            this.address
            )
        {
            console.log("GOOD");
            // 회원가입을 시도하고 
            // 만약 회원가입에 성공하였을 경우
            // login으로 네비게이션을 이동시킵니다.

            register( this.email, this.passwd, this.firstname, this.lastname, this.address ).then((response)=>{
                Alert.alert('환영합니다.! 로그인해주세요!');
                this.props.navigation.navigate(INIT_SCREEN_NAME)
            }).catch((error)=>{
                if( error.response ) {
                    Alert.alert('유효하지 않는 데이터가 존재합니다.');
                } else if( error.request ) {
                    Alert.alert('networkError');
                } else {
                    Alert.Error('error');
                }
            }).finally(
                () => {
                    this.setState(()=>{ return {...this.state, isLoading: true }; });
                }
            );
        }

        console.log('다시 입력해주세요!');
        return;
    }

    render() {
        const { navigation } = this.props;
        return (
        <DismissKeyboardView style={Styles.container}>
            <Text style={Styles.text}>Register</Text>
            <TextInput
                    style={Styles.input}
                    placeholder="email"
                    onChangeText={(text)=>{ this.email = text; }}
                    />
            <TextInput
                    style={Styles.input}
                    placeholder="passwd"
                    onChangeText={(text)=>{this.passwd = text; }}
                />
            <TextInput
                    style={Styles.input}
                    placeholder="firstname"
                    onChangeText={(text)=>{this.firstname = text; }}
                />
            <TextInput
                    style={Styles.input}
                    placeholder="lastname"
                    onChangeText={(text)=>{this.lastname = text; }}
                />
            <TextInput
                    style={Styles.input}
                    placeholder="address"
                    onChangeText={(text)=>{this.address = text; }}
            />
            <ListButton title="Next 가기" onPress={()=>{ this.tryRegister }}></ListButton>
            <ListButton title="돌아가기" onPress={()=>{ navigation.goBack(); }} />

            {this.state.isLoading && <CentralActivityIndicator/>}
        </DismissKeyboardView>
        )
    }
}
export default connect()(Register);