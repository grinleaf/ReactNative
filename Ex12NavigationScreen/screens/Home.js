import React, {Component} from "react"
import {View, Text, Button, StyleSheet} from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Home Screens</Text>
                {/* 화면 전환용 버튼 */}
                <Button title="go to the second screen" onPress={this.gotoSecond}></Button>
            </View>
        )
    }

    gotoSecond= ()=>{
        //react navigation에서는 Navigator으로 보여주는 Component들에게 Main에서 props 변수로 navigation 객체를 자동 전달함
        //즉, this.props 객체의 멤버로 navigation 객체가 이미 존재하고 있음!
        //this.props.navigation.navigate('Second')    //파라미터 : Screen 등록 시 지정했던 name 속성의 식별자
        //여기서 실행했을 때 up버튼이 있는 화면의 경우, 아래 스택되어있는 화면이 있다는 의미! == finish()가 자동으로 되지 않음

        //* 만약 현재 화면을 finish 하면서 screen 전환하고 싶을 경우
        //this.props.navigation.replace('Second')

        //* 화면 전환과 함께 데이터를 전달하고 싶을 경우 : 컴포넌트 지정과 함께 두번째 파라미터에 보낼 값들을 객체 하나로 묶어 보냄
        this.props.navigation.navigate('second', {name:'sam', age:20})  //함수도 보낼 수 있음!
    }
}

const style= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    text:{
        padding:8,
        color:'black',
    },
})