import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';

//다른 문서에서 만든 컴포넌트 import 하기
import MovieStackNav from './MovieStackNav';

//Drawer Navigator 객체 생성
const Drawer= createDrawerNavigator()

//단순 Navigator 이므로 함수형 컴포넌트로 제작!
const MainDrawerNav= ()=>{
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name='MovieStackNav' component={MovieStackNav}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default MainDrawerNav

