import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, Alert, Image} from 'react-native'

class MainComponent extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.plainText}>{this.state.msg}</Text>
                {/* <Button title='button' onPress={clickBtnFunction3}></Button> */}
                {/* JSX 에서는 onPress에 함수()로 주면 클릭 시 호출이 아닌, View가 만들어질 때 호출됨. 함수명만 줘야합니다~ */}
                {/* 클래스 외부에 있는 함수를 버튼 클릭 콜백함수로 사용해도 동작은 하지만, 기본적으로 클래스의 컴포넌트를 외부에서 제어하는 방식은 권장하지 않음! */}
                {/* 가급적 클래스의 콜백함수는 멤버함수(==메소드)로 만들 것을 권장함!! */}
                {/* 메소드로 짜두면, 다른 문서에서 해당 클래스 import 시 따로 외부의 함수를 import 하여 사용할 필요가 없어짐! 재사용성의 관점 */}
                <Button title='button' onPress={this.changeText3}></Button>
                {/* JS에서는 멤버 지칭 시 반드시 this. 으로 찾아야함! */}
                <View style={{marginTop:40,}}></View>
                <Button title='change image' color='orange' onPress={this.changeImage}></Button>
                <Image source={ this.state.img } style={style.img}></Image>
            </View>
        )
    }

    //이미지를 변경하는 기능메소드
    changeImage= ()=>{
        //화면갱신에 영향을 주는 변수 state를 변경하기 --> state에 여러 멤버값들이 있어도, 필요한 멤버만 설정이 가능하다!
        //Image 컴포넌트가 보여주는 이미지값을 변경
        this.setState({img:require("./image/a_lion.png")})
    }

    //콜백함수를 멤버로 만들기
    clickBtnFunction4(){
        Alert.alert('press button!!!')
    }

    //버튼 클릭 시에 Text 컴포넌트의 글씨 변경하기
    // ** RN 에서는 컴포넌트를 추적하여 해당 컴포넌트의 text를 바꾸는 방식이 아니라, 특정 text(변수)의 값을 조정하여 컴포넌트에 줌
    changeText(){
        //Text 컴포넌트가 보여주는 값을 가진 aaa 변수 값을 변경
        this.aaa= "Nice to meet you."    //error : RN에서는 함수도 클래스의 특징을 가짐. this 키워드를 changeText() 함수의 this로 해석함
        // --> MainComponent클래스의 멤버 aaa를 사용하기 위해서는... 생성자 함수의 성질을 가지지 않는 화살표함수를 사용해야함! 반드시!
    }

    //--> 화살표함수사용하기
    changeText2= ()=>{
        //해당 화살표함수 안에서의 this는 MainComponent클래스가 됨!
        this.aaa= "Nice to meet you."
        //값은 바뀐 상태이지만, 화면은 바뀌지 않음. 값이 바뀌었다고 알려줘야함! RN 의 매우매우 중요한 매커니즘~!~!~ 
        //*** RN 주요 키워드 ***
        //1. Component
        //2. state : RN 에서는 모든 멤버변수가 화면갱신에 영향을 주는 것은 아님. 특별한 변수인 State를 사용해야함! (아래 샘플)
            //--> Ex03TextInput 예제 참고
        //3. props --> EX06CustomComponent 참고
    }

    // ** 컴포넌트에 보여줄 데이터를 가진 변수들은 지역성을 띄면 안됨! 멤버변수(==프로퍼티)로 만들 것!
    // ** 멤버변수는 let 키워드 사용하지 않음
    aaa= "야야"

    //*** Component 클래스 안에서 화면갱신에 영향을 주는 특별한 멤버변수가 이미 존재. --> [ State(상태) ]
    state= {
        msg:"Hello",
        img: require("./image/a_pig.png")
    }
    changeText3= ()=>{
        //this.state.msg="Nice to meet you."  //이렇게 사용하면 화면 갱신 x. 자동 화면 갱신을 위해서는 state 값을 변경하는 기능 메소드 호출해야함
        this.setState({msg:"Nice to meet you"})
    }

}

//* 클래스 안에 있으면 메소드, 클래스 밖에 있으면 함수라고 칭함! (JS)
//버튼 클릭 시에 발동하도록 지정한 함수
// [ 선언적 함수 ]
function clickBtnFunction(){
    //경고창 띄우기
    alert("press button")
}

// [ 익명 함수 ]
let clickBtnFunction2= function(){
    //리액트 네이티브 전용 다이얼로그 : Alert.alert('')
    Alert.alert('press button!')
}

// [ 화살표 함수 ]
let clickBtnFunction3= () => {Alert.alert('press button!!')}


//스타일 객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    plainText:{
        marginBottom:16,
        fontWeight:'bold',
        color:'black',
    },
    img:{
        marginTop:8,
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
    },
})

export default MainComponent