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
    ActivityIndicator,
    Alert
} from "react-native";
import {
    AUTH_NAVIGATION_NAME,
    HOME_NAVIGATION_NAME
} from '../utils/NavigationNames';

import { useNavigation } from '@react-navigation/core';
import ShServerApi from '../../lib/sh-server-api';
import { connect } from 'react-redux';
import { setAccount } from '../actions/AccountActions';
import { login } from '../../lib/sh-server-api/src/auth';
import ListButton from '../components/Button';
import CentralActivityIndicator from '../components/CentralActivityIndicator'

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

class Init extends React.Component {
    state = { isLoading : false };
    
    async componentDidMount() {
        // 초기 로딩을 진행합니다.
    }
    tryLogin( account ) {
        const { isLoading } = this.state;
        const { navigation } = this.props;


        if( isLoading )
            return;

        this.setState(()=>{ return {... this.state, isLoading: true }})

        // 에러 처리가 완벽하지 않지만 잘 동작함
        login( account.email, account.passwd ).then(
            (response) => {
                navigation.navigate(HOME_NAVIGATION_NAME);
            }
        ).catch(
            (error) => {
                if (error.response) {
                    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                    console.log(error.response.data);
                    Alert.alert('이메일 passwd가 유효하지 않습니다.' );
                    navigation.navigate(AUTH_NAVIGATION_NAME)
                  }
                  else if (error.request) {
                    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                    // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                    // Node.js의 http.ClientRequest 인스턴스입니다.
                    Alert.alert('networkError');
                  }
                  else {
                    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                    console.log('Error', error.message);
                    Alert.alert('Error');
                  }
            }
        ).finally(
            () => {
                this.setState(()=>{ return {... this.state, isLoading: false }});
            }
        )
    }
    EnterApplication = () => {
        
        
        // ! 주의 현재 구현된 것은 Token기반이 아님 session 기반임 
        const { navigation, account } = this.props;
        // 저장된 계정이 있을경우 로그인함
        if( account ) {
            this.tryLogin(account);
        } else {
            navigation.navigate(AUTH_NAVIGATION_NAME);
        }

    }
    
    render() {
    const { navigation } = this.props;
    // const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <Logo/>
            {this.state.isLoading ?
                <ActivityIndicator size="large"/> :
                <ListButton title="입장" onPress={this.EnterApplication } />}
            <ListButton title="홈으로 가기" onPress={()=>{ navigation.navigate(HOME_NAVIGATION_NAME); }} />
        </View>
    )
    }
}

// store안의 있는 값을 props로 연결합니다.
const mapStateToProps = (state) => ({
    account : state.account,
});

export default connect(mapStateToProps) (Init);
