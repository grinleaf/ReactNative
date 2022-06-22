import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BigCatalogList from '../components_movie/BigCatalogList';

export default class MovieList extends Component{   
    render(){
        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";
        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";

        return(
            <ScrollView style={style.root}>
                {/* 상단 가장 큰 이미지를 보여주는 영역에 정보를 가져오는 fetch 작업 코드가 올 자리! 복잡할 수 있으니 별도 컴포넌트로 관리하기 */}
                {/* --> BigCatalog.js */}
                <BigCatalogList url={bigUrl}></BigCatalogList>

                {/* 영화 목록을 보여주는 작은 사이즈의 가로 스크롤 리스트 (컴포넌트의 디자인이 동일) */}
                {/* --> SmallCatalog.js */}
                {/* 1) 최신등록순 */}
                
                {/* 2) 평점순 */}
                
                {/* 3) 다운로드순 */}

            </ScrollView>
        )
    }

    // MovieStackNav의 screenOptions 대신, 해당 컴포넌트에서 메뉴바 옵션 설정이 가능
    componentDidMount(){    //render() 실행 후 컴포넌트가 장착되면 자동으로 발동하는 라이프사이클 메소드 
        //제목줄에 [ 햄버거메뉴아이콘 ], [ 로그아웃 ] 메뉴 버튼 배치 및 타이틀 중앙정렬
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerLeft: ()=>{ 
                return(
                    <TouchableOpacity style={{marginLeft:16}} onPress={()=>this.props.navigation.toggleDrawer()}>
                        <Image source={require('../images/ic_menu.png')}></Image>
                    </TouchableOpacity>
                )
            },
            headerRight: ()=>(
                <TouchableOpacity 
                    style={{flexDirection:'row', marginRight:16}}
                    onPress={async()=>{
                        //로그아웃이므로 AsyncStorage에 저장된 로그인 정보를 삭제 --> 비동기 작업이므로 동기화해야함!
                        AsyncStorage.removeItem('email') //시작부분에 초기화를 "" 빈글자로 해놨으니까 ㅇㅅㅇ... remove 말고 set으로 맞춰주자
                        //promiss 문법의 .then() 메소드 호출 시 문법이 다소 복잡해보임
                        //ES7 버전에서 등장한 async-await : await 이 쓰여진 메소드는 앞에 async 키워드가 반드시 명시되어있어야 한다!
                        // await AsyncStorage.setItem('email',"")

                        //저장 데이터 제거 후 자동으로 로그인 화면으로 전환
                        this.props.navigation.replace('Intro')
                    }}>

                <Image source={require('../images/tabs/ic_profile.png')}></Image>
                <Text>로그아웃</Text>
            </TouchableOpacity>
            )
        })
    }
}

const style= StyleSheet.create({
    root:{ flex:1, backgroundColor:'#FEFFFF',},
})