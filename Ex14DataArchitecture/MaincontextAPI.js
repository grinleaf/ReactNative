//** 계층구조의 컴포넌트들 사이에 데이터를 전달-전달-전달-전달 하지 않고, 일종의 전역변수 같은 곳에 데이터를 하나 위치
//** */ 그 안의 자식들이 모두 어디서든 필요할 때 사용하는 기법 : [ ContextAPI ]
import React, {Component} from "react";
import {View, Text, Button} from 'react-native'
import {Second2} from './Second2'

// ContextAPI 를 사용하기 위한 객체 생성부터! : [ React 클래스의 메소드 ]
export const MyContext= React.createContext()

export default class MainContextAPI extends Component{

    state= {data:'Hello'}
    changeText= ()=> this.setState({data:"Nice to meet you"})

    render(){
        return(
            //해당 컴포넌트의 state 데이터를 자식 또는 자손들에게 제공하고 싶다면 반드시 ContextAPI의 Provider 객체가 필요함
            //--> 이 Provider 안에 위치하는 컴포넌트들은 어디서든 (계층 상관없이) consumer로서 제공한 데이터를 사용할 수 있음
            //Provider가 제공할 데이터를 value 속성에 1개의 객체로 전달
            <MyContext.Provider
                value={{
                    data:this.state.data,       //데이터
                    onPress:this.changeText     //메소드
                }}>
                <View style={{flex:1, padding:16}}>
                    <Text>Main : {this.state.data}</Text>
                
                    {/* 자식 컴포넌트 배치 */}
                    <First></First>

                </View>
            </MyContext.Provider>            
        )
    }
}

class First extends Component{
    render(){
        return(
            <View style={{backgroundColor:'yellow', padding:16}}>
                <Text>FIRST</Text>

                {/* 손자 컴포넌트 배치 */}
                <Second></Second>
                <Second2></Second2>
                
            </View>
        )
    }
}

class Second extends Component{
    render(){
        return(
            <View style={{backgroundColor:'aqua', padding:16}}>
                <Text>SECOND</Text> 
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