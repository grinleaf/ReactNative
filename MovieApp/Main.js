import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'

//최상위 navigator에 의해 전환될 스크린(컴포넌트) or Navigator 사용을 위한 import
import Intro from './Intro'
import LoginNav from './navigators/LoginNav'
import MainDrawerNav from './navigators/MainDrawerNav'

//앱 전체 화면들을 전환할 수 있는 최상위 Stack Navigator 객체 생성
const RootStack= createStackNavigator()

//단순 NavigationContainer만 있으면 되는 컴포넌트. 함수형 컴포넌트로 제작
//** 함수형 컴포넌트를 export 하기
//1) Main() 함수를 바깥쪽에서 export default 설정 (*권장)
//2) Main() 함수를 키워드 제거하고 전역변수로 선언

const Main= ()=> {
    return(
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen name='Intro' component={Intro}></RootStack.Screen>
                <RootStack.Screen name='LoginNav' component={LoginNav}></RootStack.Screen>
                <RootStack.Screen name='MainDrawerNav' component={MainDrawerNav}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Main