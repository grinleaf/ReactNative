import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

//재사용할 컴포넌트 import
import TabComponent from "../components/TabComponent";
import InputComponent from "../components/InputComponent";

export default class SignUp extends Component{

    //탭 선택 시에 화면이 갱신되도록 탭 관련 변수를 stat 변수에 저장
    //state 라는 특별한 변수에 저장
    state= {
        tabs:['전화번호','이메일'], //탭에 보여질 label들
        tabIndex:0,                //현재 선택된 탭 번호
    }

    //탭 선택에 따라 tabIndex 번호를 변경하는 기능 메소드
    setTabIndex= (index)=>{
        this.setState({tabIndex:index})
    }

    render(){
        return(
            <View style={style.root}>
                {/* 크게 2개영역으로 나누기 */}
                {/* 1. 본문 영역 */}
                <View style={style.content}>
                    {/* 1.1 탭 컴포넌트는 다른 화면에서도 사용될 것이므로 별도의 CustomComponent로 만들어서 재사용 */}
                    <View style={style.tabContainer}>
                        {/* <TabComponent label={this.state.tabs[0]} selected={true}></TabComponent>
                        <TabComponent label='이메일' selected={false}></TabComponent> */}
                        {/* 탭의 라벨들을 가진 tabs라는 배열 개수만큼 TabComponent를 만들기 */}
                        {   //.map()은 .forEach()와 달리 각 배열 요소마다 return이 있음
                            this.state.tabs.map((value,index)=>{
                                return <TabComponent onpress={()=>{this.setTabIndex(index)}} selected={this.state.tabIndex==index} label={value}></TabComponent>
                            })
                        }
                    </View>

                    {/* 1.2 정보 입력 : 미리 만들어놓은 InputComponent 재사용 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 1.3 이메일 입력일 때만 보이는 비밀번호 입력 컴포넌트 */}
                    {
                        //if() 문 사용 금지 --> 대신 (&&)연산자 사용 : && 연산자는 앞의 연산결과가 true 일 때만 뒤의 내용실행, false 이면 뒷부분 무시
                        this.state.tabIndex==1 && <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                    }

                    {/* 1.4 버튼 */}
                    {/* 1.4.1 전화번호 탭일 때 (다음-탭을 바꿈) */}
                    {
                        this.state.tabIndex==0 && <View style={{width:'100%', margin:16,}}><Button title="다음" onpress={()=>this.setTabIndex(1)}></Button></View>
                    }
                    {/* 1.4.2 이메일 탭일 때 (완료-화면 goBack) */}
                    {
                        this.state.tabIndex==1 && <View style={{width:'100%', margin:16,}}><Button title="완료" onpress={()=>this.props.navigation.goBack()}></Button></View>
                    }
                    {/* 1.5 전화번호 탭일 때 나타나는 안내 문구 */}
                    {
                        this.state.tabIndex==0 && <Text style={style.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있습니다.</Text>
                    }
                </View>
                {/* 2. footer 영역 */}
                <View style={style.footer}>
                    <Text style={style.footerMsg}>
                        이미 계정이 있으신가요? <Text style={style.goBack} onPress={()=>this.props.navigation.goBack()}>로그인</Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF',},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopColor:'#D3D3D3',
        borderTopWidth:1,
        padding:8,
    },
    footerMsg:{
        color:'#929292',
        textAlign:'center',
    },
    goBack:{
        color:'#3796EF',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color: '#929292',
        marginLeft:8,
        marginRight:8,
    },
})