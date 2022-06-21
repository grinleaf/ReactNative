import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

//공통사용 컴포넌트 import
import InputComponent from "../components/InputComponent";

export default class Login extends Component{
    render(){
        return(
            <View style={style.root}>
                {/* 크게 2개 영역으로 구성 : 로그인 콘텐츠 영역, 아래쪽의 앱이름 표시영역 */}
                {/* 1. 로그인 콘텐츠 영역 */}
                <View style={style.content}>
                    {/* 1.1 로고 */}
                    <Text style={style.logo}>MOVIE APP</Text>

                    {/* 1.2 이메일/비밀번호 입력박스 */}
                    {/* TextInput은 로그인, 회원가입, 비밀번호리셋 화면에 모두 사용되므로 사용빈도가 높음.
                        --> 매 화면마다 스타일하지 않고, 별도의 CustomComponent(InputComponent.js)로 제작하여 재사용 */}
                    <InputComponent secureTextEntry={false} placeholder='이메일'></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder='비밀번호'></InputComponent>

                    {/* 1.3 비밀번호 재설정 : 이벤트 처리를 할 수 있는 컴포넌트를 사용해야함. Text컴포넌트에 onPress 사용 가능!*/}
                    <Text onPress={()=>this.props.navigation.navigate('ResetPW')} style={style.resetPW}>비밀번호 재설정</Text>

                    {/* 1.4 로그인 버튼 */}
                    <View style={{width:'100%', marginBottom:32}}>
                        <Button title="로그인" color='#3796EF' onPress={{}}></Button>
                    </View>

                    {/* 1.5 회원가입 버튼 */}
                    <Text style={style.signup}>
                        계정이 없으신가요? <Text style={style.signupLink} onPress={()=>this.props.navigation.navigate('SignUp')}>가입하기</Text>
                    </Text>
                </View>

                {/* 2. footer 영역 */}
                <View style={style.footer}>
                    <Text style={style.footerCopyright}>MovieApp by grinleaf</Text>
                </View>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF',},
    content:{
        flex:1,     //footer영역을 제외한 모든 공간 사용
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8,
    },
    footerCopyright:{
        color: '#929292',
        textAlign:'center',
    },
    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:32,
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        color:'#3796EF',
        marginTop:8,
        marginBottom:16,
        marginRight:8,
    },
    signup:{
        color:'#929292',
        textAlign:'center',
    },
    signupLink:{
        color:'#3796EF'
    }
})