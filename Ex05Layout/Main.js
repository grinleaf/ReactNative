import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Main extends Component{
    render(){
        return(
            //RN 은 1개의 컴포넌트만 리턴할 수 있으므로, 여러 컴포넌트 배치를 위해서는 가장 큰 root 뷰가 있어야함(flex:1을 주어야 match/match 뷰가 됨)
            
            //1. 3개의 자식뷰 배치하기
            // <View>
            //     {/* View 의 사이즈는 숫자(dp)나 %를 사용하거나, flex 를 사용할 수 있다. */}
            //     <View style={{width:50, height:50, backgroundColor: 'red'}}></View>
            //     <View style={{width:100, height:100, backgroundColor: 'green'}}></View>
            //     <View style={{width:'70%', height:150, backgroundColor: 'blue'}}></View>
            //     {/* 기본적으로 뷰의 배치는 수직방향 (디폴트 flex 스타일, flex-direction 이 column) */}
            // </View>

            //2. 3개의 자식뷰 배치 시 사이즈를 flex로 지정해보기 (권장 : 해상도 대응 때문)
            //flex 는 flex-direction 에 따라 1 값이 width가 될수도, height 이 될수도 있다.
            //기본이 수직(column)이므로 현재 flex는 height을 의미함
            //** View의 default 스타일 : block 이 아닌 stretch!
            //** <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-start', alignItems: 'stretch'}}>
            //root View 는 height:'100%' 혹은 flex:1을 주어야 width, height 값이 화면 전체 100%를 차지함. 단, flex를 권장
            // <View style={{height:'100%'}}>
            //     <View style={{flex:1, backgroundColor: 'red'}}></View>
            //     <View style={{flex:2, backgroundColor: 'green'}}></View>
            //     <View style={{flex:4, backgroundColor: 'blue'}}></View>
            // </View>

            //*수평 배치 연습
            // <View style={{flex:1, flexDirection:'row'}}>
            //     <View style={{backgroundColor:'red', flex:1}}></View>
            //     <View style={{backgroundColor:'blue', flex:2}}></View>
            //     <View style={{backgroundColor:'green', flex:4}}></View>
            //     {/* 수평배치일 때, 자식뷰들의 flex는 width를 의미함 */}
            // </View>

            //자식뷰들에 사이즈를 직접 주어 배치(정렬)를 여러 형태로 적용해보는 연습

            //1) 수직 배치 (flexDirection: column)
            //justifyContent, alignItems 정렬 속성 연습
            //콘텐츠를 둘러싼 패딩, 마진 간격이 동일
            // <View style={{flex:1,flexDirection:'column', justifyContent:'space-around'}}>
            // <View style={{flex:1,flexDirection:'column', justifyContent:'space-evenly'}}>
            // {/* //콘텐츠 간격이 동일 (시작, 끝부분도 포함) */}
            // <View style={{flex:1,flexDirection:'column', justifyContent:'space-between'}}>
            // {/* //콘텐츠 간격이 동일 (시작, 끝부분 제외) */}
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            //2) 수평 배치 (flexDirection: row)
            // <View style={{flex:1,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green', alignSelf:'flex-start'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            //* 각 뷰 별로 height 값과 flex를 섞어 써도 상관 x
            // <View style={{flex:1}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>
            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:1, backgroundColor:'blue'}}></View>
            // </View>

            //* 중첩구조의 배치 (수직/수평 배치 혼재)
            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 수직으로 2분할하기(1:2) */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 작게 좌우로 2:1 비율 배치 */}
                    <View style={{flex:2, backgroundColor:'red'}}>
                        {/* 절대 위치를 이용하여 뷰를 겹치도록 배치하기 */}
                        <View style={{width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute', zIndex:1}}></View>
                        <View style={{width:50, height:50, backgroundColor:'gray', left:20, top:20, position:'absolute', zIndex:0}}></View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:1, backgroundColor:'yellow'}}></View>
                        <View style={{flex:1, backgroundColor:'green'}}></View>
                    </View>
                </View>
                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 작게 좌우로 1:2 비율 배치 */}
                    <View style={{flex:1, backgroundColor:'blue'}}></View>
                    <View style={{flex:2}}>
                        <View style={{flex:1, backgroundColor:'gray'}}></View>
                        <View style={{flex:1, backgroundColor:'brown'}}>
                            {/* 절대 위치를 이용하여 뷰를 겹치도록 배치하기 */}
                            <View style={{width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute', zIndex:0}}></View>
                            <View style={{width:50, height:50, backgroundColor:'gray', left:20, top:20, position:'absolute', zIndex:1}}></View>
                            
                            <View style={{width:50, height:50, backgroundColor:'aqua', right:20, bottom:20, position:'absolute', zIndex:1}}></View>

                        </View>
                    </View>
                </View>

                {/* 절대위치 : 원 모양 */}
                <View style={{width:100, height:100, backgroundColor:'orange', position:'absolute', bottom:50, left:80, borderRadius:50}}></View>

            </View>
        )
    }
}