import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native'

const BigCatalog= (props)=>{
    return(
        <TouchableOpacity activeOpacity={0.9}>
            {/* 1. 커버이미지 */}
            <Image
                source={{uri:props.movie.large_cover_image}}
                //네트워크에서 가져온 이미지는 사이즈 지정 없으면 출력 안됨!
                //이미지의 가로 너비를 디바이스의 가로너비에 맞추기
                style={{width:Dimensions.get('window').width, height:300}}></Image>
            
            {/* 2. 하단 개봉일, 제목, 장르 정보 - 이미지 위에 겹친 상태 (flex 스타일은 기본적으로 컴포넌트 겹치기가 불가능) */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    <Text style={style.labelGenre}>{props.movie.genres.join(', ')}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
    infoContainer:{
        alignItems:'flex-start',
        position:'absolute',
        bottom:0,
        width:'100%'
    },
    labelYear:{
        color:'white',
        padding:8,
        fontWeight:'bold',
        backgroundColor:'#E70915',
        marginLeft:4,
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        padding:8,
        opacity:0.8,
    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        padding:8,
    },
    labelGenre:{
        fontSize:12,
        color:'white',
        padding:8,
    },
})

export default BigCatalog