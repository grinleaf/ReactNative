import React,{Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'

export default class Main extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Hello world!</Text>

                {/* 직접 만든 Custom Component 사용해보기 */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>

                {/* 리사이클러뷰처럼 사용도 가능할 것 같다! 그런데~ */}
                {/* 컴포넌트 재사용성은 좋으나, 항상 같은 형태만 출력됨 : state 변수를 지정하고 값을 바꾸면, 모든 컴포넌트 값이 바뀌어버림 */}
                {/* Custom Component 사용 시 보여주고 싶은 값을 속성(-->props의 멤버로 저장됨)으로 전달하면 가능함! */}
                <MyComponent2 name="kim" btnTitle="확인" btnColor='indigo'></MyComponent2>
                <MyComponent2 name="park" btnTitle="취소" btnColor="green"></MyComponent2>

                {/* 별도의 js 문서에 있는 컴포넌트도 import 하여 사용 가능 */}
                {/* 속성으로 함수도 전달 가능! ; 보통 실무에서 가시성을 위해 지정하는 속성명을 기존 속성명(onPress, title...)과 동일하게 짜는 편 */}
                <MyComponent3 onPress={this.clickBtn} title="button"></MyComponent3>

                {/* 만약 해당 컴포넌트의 필수 속성값을 전달하지 않으면, error. 선택 속성값들은 error X. undefined 값이 들어감 */}
                <MyComponent3 title="버튼"></MyComponent3>

                {/* 속성값이 전달되지 않았을 경우(필수, 선택속성 둘 다 가능) 기본값을 적용하는 컴포넌트 만들기 */}
                <MyComponent4></MyComponent4>
                <MyComponent4 title='aaa'></MyComponent4>
                <MyComponent4 color='red'></MyComponent4>

                {/* 여러 개의 속성값이 전달될 때 조금 쉽게 해당 props를 적용하는 컴포넌트 */}
                <MyComponent5 title='bbb'></MyComponent5>
                <MyComponent5 title='ccc' color='black'></MyComponent5>

                {/* props 는 state 변수와는 다르게 const 이기 때문에, 한번 값을 지정하면 변경 불가능 */}

            </View>
        )
    }

    //CustomComponent(MyComponent3)로 전달할 함수
    clickBtn= ()=>{
        alert('clicked btn')
    }
}

//속성값을 전달받는 사용자정의 컴포넌트(Custom Component) 클래스
class MyComponent2 extends Component{
    render(){
        return(
            <View style={{margin:8}}>
                {/* MyComponent2 컴포넌트를 사용할 때, 설정한 속성(props==프로퍼티) 중 name이라는 이름으로 지정한 값은
                 자동으로 해당 컴포넌트 클래스 안에 있는 props 멤버변수에 자동으로 지정한 속성명을 이름으로 가진 멤버로 저장됨
                 state 변수와 마찬가지로 props 변수도 화면 갱신에 영향을 준다!  */}
                <Text>Hello {this.props.name}</Text>
                <Button title={this.props.btnTitle} color={this.props.btnColor}></Button>
            </View>
        )
    }
}

//사용자정의 컴포넌트(Custom Component) 클래스
class MyComponent extends Component{
    render(){
        return(
            <View style={{margin:8}}>
                <Text>Hello Sam~</Text>
                <Button title='click me'></Button>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{flex:1},
    text:{color:'black'},

})