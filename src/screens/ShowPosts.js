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
    ScrollView,
    FlatList,
    Keyboard,
    Dimensions
} from "react-native";
import { showPosts } from '../../lib/sh-server-api/src/post';
import CentralActivityIndicator from '../components/CentralActivityIndicator';

// ! ScrollView는
// Description : 초기 설정 Scene입니다.

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatListStyle: {
        width: "95%",
        height: "100%",
    },
    contentContainerStyle : {
        alignItems : 'center',
        justifyContent: 'space-between',
    },
    // !flat list 안에서는 % 옵션으로 설정이 안됨 나중 수정이 필요함
    card : {
        width: Dimensions.get('window').width * 0.9,
        minHeight: 400,
        borderRadius: 20,
        borderColor: "#003458",
        borderWidth: 1,
        margin: 10
    },
    cardHeader : {
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    cardHeaderTitle : {
        fontWeight : "bold",
        fontSize: 20
    },
    cardContent : {
        padding: 10
    }
});

class Card extends React.PureComponent {

    render(){
        const { title, content} = this.props;
        return (
    <View style={Styles.card}>
        <View style={Styles.cardHeader}>
            <Text style={Styles.cardHeaderTitle} >{title}</Text>
        </View>
        <View>
            <Text style={Styles.cardContent}>{content}</Text>
        </View>
    </View>
        )
    }
}

class ShowPosts extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            isLoading : false, //로딩
            LoadingData : []
        }
    }
    componentDidMount() {
        // 초기 로딩을 진행합니다.
        this.onEndReached();
    }
    renderPost( post ) {
        const { item } = post;
        return <Card title={item.header.title} content={item.contents}/>

    }

    onEndReached = () => {
        if( this.state.isLoading ) // 로딩중일 경우
            return;
        console.log('onEndReached');
        this.setState(()=>({
            ... this.state,
            isLoading : true,
        }));

        // 글을 얻습니다.
        showPosts().then((response)=>{
            this.setState(() => {
                return {
                    ... this.state,
                    LoadingData : this.state.LoadingData.concat(response.data)
                }
            });
        }).catch((error)=>{
            console.log(error);
        }
        ).finally(()=> {
            this.setState(()=>({
                ... this.state,
                isLoading: false
            }));
        });
    }

    render() {
        return (
            <SafeAreaView style={Styles.container}>
            <FlatList
                data={this.state.LoadingData }
                style={Styles.flatListStyle}
                renderItem={this.renderPost}
                contentContainerStyle={Styles.contentContainerStyle}
                keyExtractor={(item, index)=>{ return index.toString();}}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={0}
            />
            { this.state.isLoading && <CentralActivityIndicator/> }
            
            </SafeAreaView>
        )
    }
}

export default ShowPosts;