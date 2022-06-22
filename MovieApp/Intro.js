import React from 'react'
import { Button, Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

//로그인 정보가 저장되어있는지 확인한 이후에 로그인화면 또는 메인화면으로 이동하는 역할만 하는 컴포넌트
//용도가 단순하니 단순하게 함수형 컴포넌트로 만들자!

//화면 전환 기능을 가진 navigation이라는 객체가 props로 전달되어 오지만, 함수형 컴포넌트 props라는 멤버변수가 없으므로 함수 파라미터로 전달받아야함!
const Intro= (props)=>{

    //AsyncStorage에 저장되어있는 로그인 정보 확인
    AsyncStorage.getItem('email').then((value)=>{
        if(value==null || value=="") props.navigation.replace('LoginNav')
        else props.navigation.replace('MainDrawerNav') 
    })

    return(
        <View style={style.root}>
            {/* 로그인 정보 읽어오기. 로드 시간이 소요되므로, 로딩 컴포넌트 배치하기 [ ActivityIndicator ] (==progressbar) */}
            <ActivityIndicator size='large' color='indigo'></ActivityIndicator>
        </View>
    )
}

const style= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
})

export default Intro