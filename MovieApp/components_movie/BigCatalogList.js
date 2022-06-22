import React, {Component} from "react";
import { View, Text, StyleSheet, FlatList} from 'react-native'

// FlatList의 item 하나의 레이아웃용 컴포넌트
import BigCatalog from "./BigCatalog";

export default class BigCatalogList extends Component{

    state={
        data: [],
    }

    render(){
        return(
            <View style={style.container}>
                <FlatList
                    pagingEnabled={true}
                    horizontal={true}
                    data={this.state.data}      //대량의 데이터
                    renderItem={(obj)=>{        //각 아이템별로 보여줄 화면 : 배열요소값(item), 인덱스번호(index)를 가진 객체 1개가 파라미터로 전달됨
                        return <BigCatalog movie={obj.item}></BigCatalog>
                    }}>
                    {/* (==안드로이드의 RecyclerView 역할) */}
                    
                </FlatList>
            </View>
        )
    }

    //컴포넌트가 화면에 보여진 후 자동으로 발동하는 라이프사이클 메소드
    componentDidMount(){
        //인기순의 URL을 통해 데이터 받아오기 (네트워크 작업) XMLHttpReqeues, Retrofit 등 여러 라이브러리가 존재하며,
        //다른 라이브러리가 사장되고 fetch Library 등장. JS에 fetch 라이브러리 존재. + 네트워크는 비동기작업이므로, 결과값 받으려면
        //promiss 문법 사용 !
        // fetch(this.props.url)
        // .then((response)=>{
        //     return response.text()  //응답객체의 결과를 단순 String으로 변환
        // }).then((responseText)=>{
        //     alert(responseText)
        // })

        //다시 JSON 객체로 받아오기!
        fetch(this.props.url)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            // alert(json.data.movies[0].title)
            this.setState({data:json.data.movies})
        })

    }
}

const style= StyleSheet.create({
    container:{height:300, marginBottom:8,}
})