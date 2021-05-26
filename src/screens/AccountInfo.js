/*******************************************************************************
* File Name      : AccountInfo.js                                              *
* Created Date   : Sunday, May 23rd 2021, 8:57:21 am                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : AccountInfo screen
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import ListButton from '../components/Button';

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button : {
        marginTop: 20,
        backgroundColor: 'black',
        
    }

});

const AccountInfo = ({account}) => {
    console.log( account );
    return (
        <SafeAreaView style={Styles.container}>
            <ListButton title={account?.email} style={Styles.button} />
            <ListButton title={account?.passwd}/>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    account : state.account
});
export default connect(mapStateToProps)(AccountInfo);
