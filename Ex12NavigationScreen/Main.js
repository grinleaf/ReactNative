//** RN 은 기본적으로 화면전환 기술이 존재하지 않음! --> 화면 전환을 위해 별도 라이브러리를 활용함
//** React Navigation library [ https://reactnavigation.org/ ] 가이드 문서 참조

//1. 기본 필수 라이브러리 추가
// > npm install @react-navigation/native

//2. 추가 라이브러리 2개
// > npm install react-native-screens react-native-safe-area-context

import React,{Component} from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

//Stack Navigator 가 보여줄 스크린(컴포넌트)들 import --> 현재는 익숙한 컴포넌트로 하는중 ^_^ 실무에선 스크린
import Home from "./screens/Home"
import Second from './screens/Second'
import { Button } from "react-native"

//2.2) Stack 네비게이터 객체 생성
const Stack= createStackNavigator()

// 1) Navigator들을 감싸는 최상위 Wrapper 클래스인 NavigationContainer Component를 배치하고 시작해야함!
export default class Main extends Component{
    render(){
        return (
            <NavigationContainer>
                {/* 원하는 화면 전환 방식을 결정하는 Navigator를 배치 */}
                {/* 전환 방식에 따른 여러 종류의 Navigator가 존재 */}
                {/* 2) Stack Navigator 만들기 : 액션바가 생기는 Navigator */}
                {/* 2.1) Stack Navigator library 적용 */}
                {/* 2.2) Stack 객체 생성하기 */}
                {/* 2.3) Stack Navigator 와 스크린을 등록 */}
                <Stack.Navigator screenOptions={{
                    //title:'aa'  //모든 화면의 제목이 aa가 됨. 각자 주고싶으면 Stack.Screen 에 options 속성을 주면 됨!
                    headerStyle:{backgroundColor:'indigo'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign:'center',
                    // headerRight: ()=>{return <Button title="menu"></Button>},    //이 속성은 컴포넌트를 리턴하는 함수를 설정해줘야함
                    headerRight: ()=><Button title="menu" onPress={()=>alert('click menu')}></Button>,    //축약형! {return} 은 함께 생략하기

                }}>
                    {/* 네비게이터가 보여줄 스크린 컴포넌트들 등록 */}
                    <Stack.Screen options={{title:'홈'}} name='home' component={Home}></Stack.Screen>
                    <Stack.Screen options={{title:'두번째', headerShown:true}} name='second' component={Second}></Stack.Screen>
                    {/* Main에서만 제목줄 제어중. 각각의 화면에서 본인 제목줄을 제어할 수도 있음! --> Second.js 로 */}
                </Stack.Navigator>                
            </NavigationContainer>
        )
    }
}