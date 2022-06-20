//** RN은 데이터의 흐름이 단방향.
// --> (부모 컴포넌트가 자식-자손들에게 데이터를 속성으로 전달해줄 수 있음)
// --> (== 데이터의 흐름을 파악하기 용이하다는 이유로 RN팀이 초기에 원했던 형태)
//--> 이는 계층구조의 층이 많으면 많을 수록 번거로워지고, 단방향이기 때문에 자식컴포넌트는 부모 쪽으로 데이터 전송 불가.
//--> 또한 자식컴포넌트끼리 데이터를 주고받을 수 없음

//--> 계층구조가 적은 상황에서는 좋은 방법이지만, 계층구조가 많으면 많을수록 전달이 번거로워짐
//--> Flux 아키텍쳐 패턴 : 전역변수들만 있는 영역을 따로 만들어서 어디서든 이 변수를 사용하도록 하는 기법
//--> 이를 가장 잘 구현한 라이브러리가 리덕스(Redux) - 초기 학습과정이 다소 어려운 편
//--> RN 팀에서 리덕스처럼 Flux 패턴을 구현할 수 있는 API 제공 [ Context API ]

import React, {Component} from "react"
import { Button, Text, View } from "react-native"

export default class Main extends Component{

    state={ data:'Hello'}

    changeData= ()=> this.setState({data:'Good'})
    

    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <Text>Main : {this.state.data}</Text>
                {/* 자식 컴포넌트에게 data 전달 */}
                <First data={this.state.data} onPress={{changeData}}></First>
            </View>
        )
    }
}

class First extends Component{
    render(){
        return(
            <View style={{backgroundColor:'yellow', padding:16}}>
                {/* this.props라는 변수에 전달된 data 출력 */}
                <Text>First : {this.props.data}</Text>

                {/* 전달받은 data를 손자 컴포넌트에게 전달 */}
                <Third data={this.props.data} onPress={this.props.onPress}></Third>
            </View>
        )
    }
}

// 함수형 컴포넌트로 만들어보기 : state, props, lifecycle 없음! --> 파라미터로 전달받기
const Third= (props)=>{
    return(
        <View style={{backgroundColor:'aqua'}}>
            {/* 파라미터에 전달받은 속성 data를 보여주기 */}
            <Text>Third : {props.data} </Text>
            <Button title="글씨 변경" onPress={props.onPress}></Button>
        </View>
    )
}
