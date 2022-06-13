//컴포넌트의 render()메소드라는 시스템은 react라는 라이브러리에서 비롯됨.
//즉, react 시스템을 사용하기 위해서는 반드시 React 클래스를 import 하고 시작해야함
//+ react 라이브러리에 존재하는 Component 클래스를 사용하기 위한 import
import React, {Component} from 'react'      //React : 초기 웹 개발을 위해 만들어짐
import { View, Text, Button, StyleSheet, Image } from 'react-native'   //React-Native : 이후 앱 개발 요소를 사용하기 위해 추가적으로 만들어짐

//RN(React Native)에서는 반드시 컴포넌트를 상속한 클래스만 화면에 보일 수 있음 !!!!!!
class MyApp extends Component{


    //* 리액트의 Component 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드 존재! : render() --> override 상황임. 다만 js는 명시적으로 표기하지 않아서 ㅇㅅaㅇ
    render(){
        let name= "sam"     //지역변수
        let btnTitle= "click me"    
        //* render() 메소드에서 리턴한 컴포넌트가 화면에 보여짐
        //  render()의 리턴은 오직 1개의 컴포넌트만 가능!
        // return <Text>Hello world!</Text>
        //        <Text>Nice to meet you</Text>
        //--> 여러 컴포넌트를 묶는 컴포넌트 그룹이 필요함! (안드로이드에서는 ViewGroup==xxxLayout들 역할) : [ View ]
        //    해당 범위 안은 js 주석 문법을 따르지 않음. xml 영역이기 때문
        // *  JSX 언어의 특징 : js 안에서 xml 명시 가능 / xml 안에서 js 변수, 함수 사용 가능 ({js 영역}안에서 표시. 명령어는 불가능)
        //                     기본적으로 보여지는 스타일은 CSS를 모티브로 적용되어있음.
        //                     단, 스타일을 CSS 문서로 적용하는 것이 아니라, 스타일 값을 가진 객체를 만들어서 속성으로 지정함
        // return(
        //     <View style={style.rootContainer}>
        //         <Text style={style.mainText}>Hello {name}</Text>
        //         <Text style={style.plainText}>Nice to meet you.</Text>
        //         {/* 버튼은 style 속성이 없음!! -> 중첩 View를 만들고 그 안에 Button을 배치. 바깥 {}는 jsx 영역, 안쪽 {}는 스타일 객체 영역 */}
        //         <View style={{marginTop:10, width: 150}}>   
        //             <Button title={btnTitle}></Button>
        //         </View>
        //     </View>
        // )

        //* 이미지 컴포넌트 연습
        return (
            <View style={style.rootContainer}>
                <Text style={style.mainText}>Hello {name}</Text>
                <Text style={style.plainText}>Nice to meet you</Text>

                <Button title='button'></Button>
                <Button title={btnTitle} color='orange'></Button>

                <View style={{marginTop:10, width:'50%'}}>
                    <Button title='버튼' color='#ab3221'></Button>
                </View>
                {/* 이미지 컴포넌트 (==안드로이드 ImageView) */}
                {/* 이미지의 경로를 그냥 "" 문자열로 쓰지 않고, JS의 require()함수를 이용해야하만 함 */}
                <Image source={require('./image/a_frog.png')} style={{margin:4, flex:1, resizeMode:'cover', width:null}}></Image>
            </View>
            
        )
    }
}


// ** 아래와 같이 스타일 객체를 만들게 되면 관리도 힘들고 편집기 내 자동완성 기능도 제한되므로, 모든 스타일 관련 객체를 하나로 묶는 객체가 존재함
// --> StyleSheet
const style= StyleSheet.create({
    rootContainer:{
        backgroundColor: '#aaffcc',
        flex:1,
        padding:16, //마지막 속성에 , 붙어있어도 에러 x --> 보통 마지막값이어도 ,로 끝내곤 함니당
    },
    mainText:{
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        margin:16,
    },
    plainText:{
        margin:8,
        color:'black',

    }
})
// * MyApp 클래스가 보여주는 컴포넌트들의 스타일 값을 가진 객체를 생성
// 1. 텍스트의 스타일작업 (CSS와 비슷한 형태)
const textStyle= {
    color:'red',
    fontSize:20,
    fontWeight: 'bold',
    margin: 16  //단위 기본 dp
}

// 2. 전체 View의 스타일 작업
const rootView= {
    backgroundColor: 'yellow',
    //View의 기본 height 값은 wrap 사이즈!
        // height: 500      //error
        // height: 100%     //error
        // height: '100%'    //RN의 권장 사이즈 기법은 따로 있음~!
    // ** RN은 기본적으로 display 속성이 flex 임...으악 **
    // ** 또한, 기본 flex의 방향인 flex-direction 값이 column(수직방향)으로 되어있음 **
    // * 배치방향 변경 시 
        //flexDirection: 'row'
    // * flex 속성 중 다른 뷰와 비례적으로 사이즈 결정하는 속성값 : layout-weight == flex-grow (얘는 키워드가 쫌 다름~!)
    flex:1,     //jsx 에서는 flex-grow 를 flex 로 씀!
    padding: 16
}

//중간 글씨의 스타일 객체
const plainText= {
    margin:8,
    color: 'black'
}

//버튼의 스타일 객체 : 버튼처럼 style 적용이 불가능한 컴포넌트도 존재함~~ --> 적용하고 싶으면 ?? 다음 수업~
const btnStyle= {
    marginTop: 40,
    backgroundColor: 'green'
}

//다른 문서(index.js)에서 해당 문서의 클래스를 사용(import)하려면 반드시 이 문서에서 추출(export)해야만 한다!
export default MyApp