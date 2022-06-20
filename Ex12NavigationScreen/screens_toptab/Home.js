import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home= ()=>{
    return(
        <View style={style.root}>
            <Text style={style.text}>TAB #1</Text>
        </View>
    )
}

const style= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:'black'
    },
})

export default Home //함수형 컴포넌트는 변수자료형때문에 바로 export가 안 됨! 아래서 따로 해줘야한댕