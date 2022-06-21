import React from "react"
import { Text, TouchableOpacity } from "react-native"

//단순 스타일링된 Tab버튼 모양을 만들면 되므로 함수형 컴포넌트로 제작
const TabComponent= (props)=>{

    //선택된 탭에 따라 글씨 색상이 변경되므로, 삼항연산자를 사용하여 색상 결정 (JS는 C언어 기반이라 삼항연산자 존재!)
    let color= props.selected ? '#292929' : '#929292'

    //선택된 탭에 따라 아래 경계선의 색상도 변경
    containerStyle.borderColor= color

    return(
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            <Text style={{color:color}}>{props.label}</Text>
        </TouchableOpacity>
    )
}

let containerStyle={
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'#292929',
    paddingBottom:8,
}

export default TabComponent