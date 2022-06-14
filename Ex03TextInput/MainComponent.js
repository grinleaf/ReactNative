import React, {Component} from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'


export default class MainComponent extends Component{

    //***  화면 갱신에 영향을 주는 아주 특별한 변수 state ***
    state= {
        text: "Hello",
        text2: "RN",
        text3: "Nice to meet you",
    }

    //TextInput의 글씨가 변경될 때마다 저장하는 일반 변수
    sss=""

    render(){
        return(
            <View style={style.root}>
                <TextInput style={style.textInput} onChangeText={this.changeText}></TextInput>
                <Text style={style.plainText}> {this.state.text} </Text>

                <View style={{marginTop:40,}}></View>
                {/* 키패드 submit 버튼이 줄바꿈버튼으로 변경됨 : multiline */}
                {/* TextInput 박스의 height 값이 글자줄 수만큼 : numberofLines */}
                <TextInput multiline={true} numberOfLines={4} style={style.textInput2} onChangeText={this.changeText2}></TextInput>
                <Button title='입력 완료' onPress={this.clickBtn}></Button>
                <Text style={style.plainText}>{this.state.text2}</Text>

                <View style={{marginTop:40}}></View>
                {/* 키보드의 submit 버튼 클릭 이벤트 : onSubmitEditing 속성 */}
                <TextInput onSubmitEditing={this.submit} style={style.textInput2}></TextInput>
                <Text style={style.plainText}>{this.state.text3}</Text>
            </View>
        )
    }

    //TextInput의 글씨가 변경될 때마다 발동하는 메소드 (onChangeText 속성)
    //해당 메소드의 파라미터로 변경된 글씨가 자동 전달됨~
    changeText= (msg)=>{
        this.setState({text:msg})
    }

    changeText2= (msg)=>{
        this.sss= msg    //sss는 일반변수이므로 화면 갱신 x
    }

    clickBtn= ()=>{
        //state 값에 일반변수 sss에 저장해두었던 값을 설정
        this.setState({text2:this.sss})
    }

    //onSubmitEditing은 파라미터로 입력된 글씨를 가진 이벤트 객체가 전달됨!
    submit= (submitEvent)=>{
        let value= submitEvent.nativeEvent.text
        this.setState({text3:value})
    }
}

const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    textInput:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor: 'green',
        borderRadius: 8,
        paddingHorizontal: 16,
        height:40,
    },
    plainText:{
        marginTop:16,
        fontWeight:'bold',
        padding: 10,
        color: 'black',
    },
    textInput2:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor: 'indigo',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom:16,
        maxHeight: 200,
    },
})