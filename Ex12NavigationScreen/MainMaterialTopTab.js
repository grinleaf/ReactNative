//MaterialTopTab Navigator를 다루는 실습

import React from "react"
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Home from './screens_toptab/Home'
import Tab2 from './screens_toptab/Tab2'
import Tab3 from './screens_toptab/Tab3'

const Tab= createMaterialTopTabNavigator()

//함수형 컴포넌트로 만들어보기
const MainMaterialTopTab= ()=>{
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarPosition="bottom"
                initialRouteName='TAB2'
                screenOptions={{swipeEnabled:false}}>
                {/* screenOptions 관련 설정들은 가이드 문서에서 스스로 터득할 수 있습니당 ^____^ */}
                {/* 탭에 의해 전환될 화면 screen */}
                <Tab.Screen name="TAB1" component={Home}/>
                <Tab.Screen name="TAB2" component={Tab2}/>
                <Tab.Screen name="TAB3" component={Tab3}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainMaterialTopTab