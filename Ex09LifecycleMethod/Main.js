import React, {Component} from "react";
import { Button, Text, View } from "react-native";

export default class Main extends Component{
    //RN Component 클래스도 안드로이드의 Activity 클래스처럼 Lifecycle method가 존재함 (특정 상황에 자동 호출되는 메소드)

    //** 호출 순서 **
    //1. 생성자
    constructor(){
        super() //반드시 명시적으로 부모생성자 호출이 필요

        //화면이 없으므로 화면출력 불가. Log 출력으로 확인하기
        console.log('constructor..')    //node 콘솔창에 출력됨
    }

    //2. 화면에 보여지기 전 / 해당 컴포넌트의 클래스 화면에 연결되기 전 (요거는 RN에서 사용 지양하는 듯)
    // componentWillmount(){
    //     //현재는 deprecated 상태
    // }
    // UNSAFE_componentWillMount(){
    //     //얘도 deprecated 상태
    // }

    //3. 화면에 그려내는 메소드
    render(){
        console.log('render..')
        return(
            <View>
                <Text>Lifecycle method</Text>
                <Button title="button" onPress={()=>{this.setState({data:'Hello'})}}></Button>
            </View>
        )
    }

    //4. render() 렌더링이 끝나고 화면이 그려진 후
    componentDidMount(){
        console.log('component did mount..')
    }

    //5. 화면이 갱신될 때마다 호출되는 메소드
    componentDidUpdate(){
        console.log('component did update..')
    }

    //6. 컴포넌트가 종료될 때 호출
    componentWillUnmount(){
        console.log('component will unmount..')
    }


}