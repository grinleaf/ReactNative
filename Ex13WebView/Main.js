//WebView library 적용 : npm install react-native-webview

import React from "react";
import {Button, View} from 'react-native'
import WebView from "react-native-webview";

//함수형 컴포넌트
const Main= ()=>{
    return(
        <View style={{flex:1}}>

            {/* 1. 기본 웹뷰 배치 : style 중에서 크기 값이 기본 flex:1로 지정되어있음
             --> height 설정값 무시되며, 다른 요소를 배치할 때마다 균등하게 영역을 차지함 */}
            <WebView source={{uri:'https://reactnative.dev'}} style={{margin:8, height:100}}></WebView>
            {/* 다른 뷰가 있을 경우, 다른 뷰의 높이 값을 제외한 나머지 영역을 모두 차지함 */}
            <Button title="button"></Button>

            {/* 2. 웹뷰의 사이즈를 지정하고 싶다면, 부모 뷰로 wrap하여 부모뷰의 사이즈를 조절하기 */}
            <View style={{height:250, borderWidth:2, margin:4}}>
                <WebView source={{uri:'https://www.naver.com'}}></WebView>
            </View> 

            {/* 3. 본인 웹사이트 역시 배치 가능함. JS/CSS 모두 잘 작동함! */}
            <WebView source={{uri:'http://grinleaf.dothome.co.kr'}}></WebView>

            {/* 4. 웹뷰를 이용하여 RN에서 구현하기 번거로운 화면을 웹뷰로 만들어 적용이 가능하다. */}
            {/* 카카오지도 구현하기 - 예전 웹 수업 때 구현했던 페이지 보여주기! */}
            <WebView source={{uri:'https://grinleaf.github.io/webkakaomap/'}} style={{margin:2}}></WebView>
        </View>
    )
}

export default Main