import React, {Component} from "react";
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native'

export default class Main extends Component{
    //화면 갱신에 영향을 미치는 변수 state
    state={
        //1) 기본적인 데이터 배열
        datas:['aaa','bbb','ccc','ddd'],

        //2) 복잡한 구조의 데이터 배열
        datas2:[
            {name:"sam", message:"Hello world", img:require('./image/ic_friends.png')},
            {name:"robin", message:"Hello RN", img:require('./image/ic_award_crown_02.png')},
            {name:"kim", message:"Hello android", img:require('./image/ic_bff.png')},
            {name:"lee", message:"Hello web", img:require('./image/ic_car.png')},
            {name:"park", message:"Hello hybrid", img:require('./image/ic_dog_02.png')},
            {name:"rosa", message:"Hello Friday", img:require('./image/ic_flower.png')},
            {name:"hong", message:"Hello Monday", img:require('./image/ic_leaf.png')},
            {name:"choi", message:"Hello winter", img:{uri:'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg'}},
        ]
    }
    render(){
        return(
            <View style={style.root}>
                <Text style={style.titleText}>FlatList TEST</Text>
                {/* RN 에서 RecyclerView 역할을 하는 Component 2가지 */}
                {/* 1) FlatList : 가장 일반적인 리스트뷰 형태 */}
                {/* 2) SectionList : 섹션(대량 데이터+각 xml+'헤더 데이터' 필요)에 따라 구분 지어주는 리스트뷰 형태 (안드로이드의 extendableListView) */}
                {/* --> 섹션 리스트 형태는 잘 보이지 않는 편이라 수업 안할거양 ㅇㅅㅇ */}

                {/* FlatList의 필수 속성 2가지 */}
                {/* 1) data(대량의 데이터 역할) : '배열' */}
                {/* 2) renderItem(뷰 레이아웃 역할) : Item 하나의 모양(컴포넌트)을 만들어서 리턴하는 '함수' --> 지정한 함수가 data 속성에 지정한 배열 요소 개수만큼 호출됨 */}
                {/* --> 안드로이드와 달리 Adapter가 필요 없음~ */}
                {/* <FlatList 
                    data={this.state.datas}
                    renderItem={(obj)=>{ 
                        //** 파라미터에 위 data 속성으로 지정한 배열의 요소(item)와 각 요소의 index 번호를 멤버로 가진 객체를 Text 컴포넌트 안에 줌
                        return <Text>{obj.item} - {obj.index}</Text>
                    }}>
                </FlatList> */}

                {/* renderItem 콜백함수 파라미터 객체를 받을 때 '구조분해할당' 기법 사용하는 것을 선호 */}
                {/* <FlatList 
                    data={this.state.datas}
                    // renderItem={(obj)=>{ 
                    //     const {item, index}= obj
                    renderItem={({item, index})=>{ 

                        //** 아이템이 터치될 수 있도록 View를 TouchableXXX으로 변경하기
                        //** onPress={alert(index)} 해버리면 뷰가 생성됨과 동시에 alert가 호출되므로 클릭 이벤트 x
                        //** onPress={화살표함수(익명)}를 입력하면 alert()에 값 전달 가능해짐
                        return(
                            <TouchableOpacity style={style.itemView} onPress={()=>{alert('click '+index)}}>
                                <Text>번호 : {index}</Text>
                                <Text>값 : {item}</Text>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList> */}

                <FlatList
                    data={this.state.datas2}
                    renderItem={ ({item, index})=>{
                        return (
                            <TouchableOpacity style={style.item} onPress={()=>{Alert.alert(item.name)}}>
                                <Image source={item.img} style={style.itemImage}></Image>
                                <View>
                                    <Text style={style.itemName}>{item.name}</Text>
                                    <Text style={style.itemMsg}>{item.message}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    } }>
                </FlatList>

            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    titleText:{
        fontSize:24, 
        fontWeight:"bold", 
        textAlign:'center',
        paddingTop:8,
        paddingBottom:8,
        color:'black',
    },
    itemView:{
        borderWidth:1,
        borderRadius:4,
        margin:8,
        padding:8
    },

    item:{
        flexDirection: 'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImage:{
        width:120,
        height:120,
        resizeMode: 'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:"italic",
    }
})