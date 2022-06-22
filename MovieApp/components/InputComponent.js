import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

//단순 스타일링된 TextInput 만들기 (별도의 state 필요 X --> 함수형 컴포넌트로 제작)
const InputComponent= (props)=>{    //전달된 속성을 파라미터로 전달받기
    return(
        <View style={style.container}>
            <TextInput
                onChangeText={props.onChangeText}
                selectionColor='#292929'    //블럭처리 시 블럭 색상
                autoCapitalize='none'       //첫글자 대소문자 설정
                allowFontScaling= {false}   //폰트 축적 설정
                autoCorrect= {false}        //맞춤법 검사 설정
                secureTextEntry={props.secureTextEntry} //글자 암호화
                placeholder={props.placeholder}
                placeholderTextColor='#c3c3c3'
                style={style.input}></TextInput>
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor: '#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1,
        color:'#292929',
    },
})

export default InputComponent