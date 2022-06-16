import React, { Component } from "react";
import { Button, View } from "react-native";

export default class MyComponent5 extends Component{
    render(){
        return(
            <View>
                {/* 버튼에 설정할 전달받은 속성값들(props)가 여러 개일 때 한방에 적용 : [...] Spread 연산자! */}
                <Button {...this.props}></Button>
            </View>
        )
    }
}