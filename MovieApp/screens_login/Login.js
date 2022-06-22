import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

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
                    <InputComponent onChangeText={this.onChangeText} secureTextEntry={false} placeholder='이메일'></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder='비밀번호'></InputComponent>

                    {/* 1.3 비밀번호 재설정 : 이벤트 처리를 할 수 있는 컴포넌트를 사용해야함. Text컴포넌트에 onPress 사용 가능!*/}
                    <Text onPress={()=>this.props.navigation.navigate('ResetPW')} style={style.resetPW}>비밀번호 재설정</Text>

                    {/* 1.4 로그인 버튼 */}
                    <View style={{width:'100%', marginBottom:32}}>
                        <Button title="로그인" color='#3796EF' onPress={this.login}></Button>
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

    // '이메일' 입력 InputComponent에 전달할 메소드
    onChangeText= (value)=>{    //TextInput의 글씨가 변경될 때마다 파라미터로 글씨 전달됨
        // alert(value)         //글씨 입력 시 다이얼로그 뜨는지 확인!
        this.email= value       //글씨가 입력될 때마다 멤버변수 email 에 값 저장됨
    }

    //입력된 이메일 글씨를 저장할 일반 멤버변수
    email= ""

    //로그인 버튼 클릭 시 반응하는 함수
    login= ()=>{

        //다음 접속 시 로그인을 다시 요청하지 않도록 디바이스에 로그인 정보를 저장해놓기 (==SharedPreference)
        //Async(비동기)Storage : 기본적으로 JS 는 C 기반이기 때문에 싱글 스레드! (스레드라는 문법을 쓰지 않음)
        //--> 스레드 기능이 필요한 경우가 생김. 이 때 사용하는 개념이 Web Worker(멀티 프로세스-싱글 스레드 환경)
        //--> Multi Thread 개념을 벗어나 Single Thread 환경에서 나누어 작업하는 Corutine(코루틴)... 공부 더 해보자~

        //단, 비동기 작업이므로, 저장 작업이 끝나기 전에 화면이 전환되어버리면 정상적인 작동이 안될 수 있음
        //저장이 완료되는 것을 확인한 후에 다음 코드가 실행되도록 하는 '콜백 작업'이 필요!
        // --> JS에서는 'promiss'라고 지칭. [ then() 메소드 ]
        AsyncStorage.setItem('email',this.email).then(()=>{   //데이터 하나당 아이템 하나. (저장될 식별자, 값)
            //해당 작업이 완료된 후에 실행될 코드 영역
            alert('로그인 정보 저장 완료')

            this.props.navigation.replace('MainDrawerNav') //화면전환
            //현재 로그인 화면 finish() 하기 위해 navigation.navigate 대신 replace 사용!
        })  
        
        

        //로그인 성공했을 때 앱의 메인화면인 MovieList(엄밀히는 MovieList화면을 가진 DrawNav)로 이동하기
        this.props.navigation.navigate('MainDrawerNav')

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