/*******************************************************************************
* File Name      : home.js                                                     *
* Created Date   : Tuesday, May 4th 2021, 7:24:07 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 홈화면입니다.

import React from 'react';
import {
    Keyboard,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Alert
} from "react-native";
import { writePost } from '../../lib/sh-server-api/src/post';
import CentralActivityIndicator from '../components/CentralActivityIndicator';
import DismissKeyboardView from '../components/DissmiseKeyboardView';
import { AUTH_NAVIGATION_NAME, INIT_SCREEN_NAME } from '../utils/NavigationNames'

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    titleInput: {
        width: "67%",
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 20
    },
    writePostButton: {
        width: "27%",
        height: 50,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: '#7a42f4',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    contentsInput: {
        width: "95%",
        height: "80%",
        padding: 20,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 20
    },
    buttonTextStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: "row",
        width: "95%",
        height: 50,
        justifyContent: "space-between"
    }
});

class WritePost extends React.Component {
    constructor(props) {
        super(props);
        this.title = null;
        this.content = null;

        this.state = { 
            isLoading : false,
            title: null,
            content: null,
        }
    }
    tryWritePost = () =>{
        const { navigation } = this.props;
        if ( this.state.isLoading )
            return;

        this.setState(()=>{
            return {... this.state,
                isLoading : true
                }
        });
        
        writePost( this.title, this.content ).then((response)=>{
            Alert.alert('글을 작성하였습니다.');
        }).catch((error)=>{
            if( error.response ) {
                navigation.navigate(INIT_SCREEN_NAME);
            } else if ( error.request ) {
                Alert.alert('요청 응답 없음');
            } else {
                Alert.alert('error');
            }
        }).finally(
            () => {
                this.setState(()=>{
                    return {... this.state,
                        isLoading : false
                        }
                });
            }
        );
    }
    render() {
        return (
            <SafeAreaView style={Styles.container}>
            <DismissKeyboardView style={Styles.container} >
            <View style={Styles.titleContainer}>
            <TextInput style={Styles.titleInput}
                onChangeText={(text) => { this.title = text; }}
                placeholder="제목을 작성해 주세요!"
            />
            <TouchableOpacity style={Styles.writePostButton} onPress={this.tryWritePost} >
                <Text style={Styles.buttonTextStyle}> 작성 </Text>
            </TouchableOpacity>
            </View>
            <TextInput
                style={Styles.contentsInput}
                placeholder="글 내용을 작성해주세요!"
                onChangeText={(text) => {this.content = text; }}
                multiline={true}
            />
            </DismissKeyboardView>
            { this.state.isLoading && <CentralActivityIndicator/> }
            </SafeAreaView>
        )
    }
}
export default WritePost;