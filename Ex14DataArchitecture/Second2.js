import React, {Component} from "react";
import {View, Text, Button} from 'react-native'
import {MyContext} from "./MaincontextAPI";

export default class Second2 extends Component{
    render(){
        return(
            <View style={{backgroundColor:'aqua', padding:16}}>
                <Text>SECOND2</Text> 
                {/* Main의 Provider 가 제공한 정보를 First를 거치지 않고 바로 사용하고자 할 때 : Consumer 가 되어야함 */}
                {/* 해당 Consumer 안에 콜백 함수가 있으며, 콜백함수의 파라미터로 Provider의 value 속성으로 전달되어 옴 */}
                {/* 해당 콜백함수의 리턴값으로 보여줄 컴포넌트를 작성하면 됨! */}
                <MyContext.Consumer>
                    {
                        (value)=>{
                            return(
                                <View>
                                    <Text>{value.data}</Text>
                                    <Button title="글씨변경" onPress={value.onPress}></Button>
                                </View>
                            )
                        }
                    }
                </MyContext.Consumer>
            </View>
        )
    }
}