import React, {Component, useEffect, useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class Main extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Functional Component</Text>

                {/* 새로운 CustomComponent를 만드는 방법 2가지 */}
                {/* 1) RN의 class Component : Component 클래스를 상속하여 만드는 일반적인 컴포넌트 */}
                {/* 2) fucntional Component : 익명함수 만드는 방식처럼 만들어진 컴포넌트 */}

                {/* 1) class Component == React Component, stateful Component 라고도 함! */}
                <MyComponent></MyComponent>

                {/* 2) functional Component 함수형 컴포넌트 == stateless Component */}
                {/* 원래는 함수 호출문을 써야하지만, return이 컴포넌트이므로 그냥 컴포넌트인 것처럼 사용 */}
                {/* {MyComponent2()} */}
                <MyComponent2></MyComponent2>
                <MyComponent2></MyComponent2>
                {/* <> 의 역할 == new 객체명 */}

                {/* ==> 1)과 2)을 비교해보았을 때, 함수형이 훨씬 간결함~!~! 실무에서도 함수형 코드를 더 선호함 */}
                {/* 차이점 : Component 클래스를 상속하지 않으므로 state, props 변수 사용 불가 + Lifecycle Method 사용불가 */}
                {/* --> 그래서 함수형 컴포넌트는 화면 갱신을 자체적으로 할 수 없음. (단순 반복 나열되는 모양을 출력만 할때 사용) */}
                {/* --> props 가 없긴 하지만, 속성을 파라미터로 전달받아 사용하는 것은 가능함!  */}

                {/* 3) 일반 class component 에서 속성 전달하기 */}
                <MyComponent3 aaa="sam"></MyComponent3>
                <MyComponent3 aaa="robin"></MyComponent3>

                {/* 3.1) functional component 에서 속성 전달하기 */}
                <MyComponent4 title="android"></MyComponent4>
                <MyComponent4 title="ios"></MyComponent4>

                {/* 4) 함수형 컴포넌트 파라미터에 여러개의 속성 전달하기 */}
                <MyComponent5 title="RN" msg="react native"></MyComponent5>
                <MyComponent5 title="android" msg="native app"></MyComponent5>

                {/* 5) 구조분해할당으로 속성들 처리하기 */}
                <MyComponent6 title='ios' msg='iphone app'></MyComponent6>

                {/* 두 함수형 컴포넌트끼리의 통신 (액티비티 안의 두 개의 프래그먼트 간의 통신과 비슷한 맥락) */}
                <ComponentA text={this.state.text}></ComponentA>
                <ComponentB onPress={this.changeText}></ComponentB>

                {/* state가 필요하면 class component로 / state가 필요 없으면 functional component로 만들었으나,
                    함수형이 더 간결하여 선호도가 높았기 때문에, 현재는 함수형에도 state를 만들 수 있게 되었음
                    완전하지는 않으나, 라이프사이클 메소드와 유사한 동작을 수행하는 것도 가능하게 됨! (단점 보완)
                    지금은 거의 함수형 컴포넌트를 사용하는 편 */}
                {/* 7) */}
                <MyComponent7></MyComponent7>
            </View>
        )
    }
    state= {text: "Hello"}

    changeText= ()=>{
        this.setState({text:"nice to meet you."})
    }
}

//7) functional component Hook 기술(원래 발동하면 안되는 콜백에 후크(갈고리)를 걸었다는 의미~)
//   : [ useState(), useEffect() ]  //각각 state 변수 사용, 라이프사이클 메소드 사용
const MyComponent7= ()=>{
    //state 역할을 수행하는 변수 : useState(변수 초기값) --> React 클래스에 있음! import 되어있어야만 사용 가능
    //+ 해당 msg 변수의 값을 갱신하는 함수까지 만들어줌!
    const [msg, setMsg]= useState('Hello')  //변수의 초기값을 파라미터로 지정
    let [age, setAge]= useState(0)

    //라이프사이클 중에서 가장 중요한 componentDidMount, componentDidUpdate와 같은 역할 Hook함수
    useEffect(()=>{
        alert('use effect...')  //화면이 보여질 때 + 갱신될 때마다 호출됨
    })

    return(
        <View>
            <Text>{msg}</Text>
            <Button title="button" onPress={()=>{setMsg('Good')}}></Button>

            <Text>{age}</Text>
            <Button title="add age" onPress={()=>{setAge(age+1)}}></Button>
        </View>
    )
}

//6) 컴포넌트 간 통신하기 (파라미터 구조분해할당으로 전달)
const ComponentA= ({text})=>{
    return(
        <View>
            <Text>{text}</Text>
        </View>
    )
}

const ComponentB= ({onPress})=>{
    return(
        <View>
            <Button title="글씨 변경" onPress={onPress}></Button>
        </View>
    )
}

//5) 구조분해할당으로 속성들 사용하기 : 컴포넌트 내에서 변수 사용이 매우 편함
const MyComponent6= ({title, msg})=>{
    return (
        <View style={{margin:4,}}>
            <Text>MyComponent6 : {title}</Text>
            <Text>MyComponent6 : {msg}</Text>
        </View>
    )
}

//4) 여러개의 속성들 전달하기
const MyComponent5= (props)=>{
    return (
        <View>
            <Text>MyComponent5 : {props.title}</Text>
            <Text>MyComponent5 : {props.msg}</Text>
        </View>
    )
}

//3) class component - '속성을 전달 받는' 일반 클래스 컴포넌트
class MyComponent3 extends Component{
    render(){
        return(
            <View>
                {/* 컴포넌트는 전달받은 속성을 저장하고 있는 props 변수가 존재함 */}
                <Text style={style.text}>Nice {this.props.aaa}</Text>
            </View>
        )
    }
}

//3.1) functional component - '속성을 전달 받는' 함수형 컴포넌트
// props 대신 파라미터로 속성값을 전달받아 사용함! (많은 속성값을 1개의 객체로 묶어서 전달받음)
const MyComponent4= (obj)=>{
    return (
        <View>
            <Text style={style.text}>Good {obj.title}</Text>
        </View>
    )
}

//2) functional component
const MyComponent2= ()=>{
    return (
        <View>
            <Text style={style.text}>Hello functional MyComponent2</Text>
        </View>
    )
}

//1) class component
class MyComponent extends Component{
    render(){
        return(
            <View>
                <Text style={style.text}>Hello MyComponent</Text>
            </View>
        )
    }
} 


const style= StyleSheet.create({
    root:{flex:1, padding:16},
    text:{margin:8, padding:8}
})