import React, {Component} from "react"
import {View, Text, Button, StyleSheet} from 'react-native'

export default class Second extends Component{
    render(){
        //전달된 데이터를 받는 객체의 멤버를 쉽게 사용하기 위한 '구조분해할당'
        const {name, age}= this.props.route.params
        
        return(
            <View style={style.root}>
                <Text style={style.text}>Second Screens</Text>

                {/* 이전 화면(Home)에서 전달된 데이터 객체는 자동으로 props route.params라는 변수에 전달됨 */}
                <Text>{this.props.route.params.name}, {this.props.route.params.age}</Text>
                {/* 위처럼 사용하면 파라미터명이 너무 길어서 사용할 때마다 불편하기 때문에, 보통 구조분해할당으로 전달함 */}
                <Text>{name}, {age}</Text>

                {/* 뒤로가기용 버튼 */}
                <Button title='go Back' color='orange' onPress={()=>this.props.navigation.goBack()}></Button>

                {/* 제목줄 옵션 제어하는 버튼 --> 요거는 뭔가 바뀐 사항이 있다 ㅇㅅㅇ...일단 보류*/}
                {/* <Button title="제목글씨 변경" onPress={this.props.navigation.setOptions({title:'SECOND'})}></Button> */}
            </View>
        )
    }

    //Second 컴포넌트가 그려진(render) 후 자동으로 발동하는 라이프사이클 메소드
    componentDidMount(){
        this.props.navigation.setOptions({title:'Good'})
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