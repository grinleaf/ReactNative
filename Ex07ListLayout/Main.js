import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class Main extends Component{
    render(){
        //대량의 데이터를 리스트 형태로 보여주는 작업이 가장 일반적인 UI

        //변수에 JSX 컴포넌트 객체 저장 가능
        const aaa= <Text>Nice</Text>

        //변수에 컴포넌트 그룹도 저장 가능
        const bbb= <View style={{margin:8}}>
                        <Text>Hello RN</Text>
                        <Button title='button'></Button>
                    </View>

        //위의 aaa, bbb 변수를 배열요소로 가지는 ccc 배열
        const ccc= [aaa, aaa, bbb, this.showItemView()]

        //실제 대부분의 배열은 대량의 데이터를 컴포넌트 형식이 아닌 스트링 데이터인 경우가 많음! 아니면 스트링 배열객체거나...암튼
        const datas= ['aa','bb','cc','dd','ee']

        //** 위의 datas 배열을 컴포넌트 형식으로 만들어 화면에 출력하기 위해 xxx 배열에 넣기 위한 배열의 메소드들 **
        //1) .forEach : 배열 요소 갯수만큼 반복. 요소에 접근만 가능 .forEach(function(value,index,array){}) --> 기존 방식
        //2) .map : 배열 요소 갯수만큼 반복하되, 반복하면서 각각 return 값을 반환 가능! return <Text>배열요소의 value</Text>
        //배열 요소만큼 function() 호출 + 파라미터로 해당 요소의 값과 인덱스 번호 전달 + 요소 개수만큼 새로운 배열 만들어서 최종 리턴
        //ListView 처럼 사용 가능하지만, 데이터양이 많아지면 자동으로 스크롤되지는 않음. 가로 스크롤도 X
        //--> 요걸 보완하는 게 [ FlatList ] (안드로이드의 RecyclerView 역할) 
        const xxx= datas.map( function(value, index, array){
            return (
                <View>
                    <Text style={{margin:4, borderWidth:1, padding:8, borderRadius:4}}>{value}</Text>
                </View>
            )
        })

        return(
            <View style={style.root}>
                <Text style={style.text}>List layout</Text>

                {xxx}

                {aaa}
                {aaa}
                {bbb}
                {bbb}

                {/* 컴포넌트를 리턴하는 함수 호출
                --> 같은 폼을 계속 쓸 때 변수가 아닌 함수를 쓰는 이유? 파라미터에 값 전달해서 값을 바꾸려고! 동적 화면 구현 때문 */}
                {this.showItemView()}
                {this.showItemView()}

                {/* 파라미터 전달을 통해 콘텐츠가 다른 컴포넌트 보여주기 */}
                {this.showItemView2('sam','first','indigo')}
                {this.showItemView2('robin','second','green')}

                {/* 컴포넌트를 요소로 가진 배열 : 배열명만 출력하면 요소값 전체가 나열됨! */}
                {/* ccc 배열요소로 들어가는 컴포넌트를 각각 구성한 후, ccc를 한번에 출력하면 리스트형태로 모든 컴포넌트를 나열할 수 있음! */}
                {ccc}
            </View>
        )
    }
    //컴포넌트를 리턴하는 메소드(파라미터에 값을 전달받음) 정의
    showItemView2(name, title, color){
        return (
            <View style={{margin:8}}>
                <Text>Nice {name}</Text>
                <Button title={title} color={color}></Button>
            </View>
        )
    }

    //컴포넌트를 리턴하는 메소드 정의
    showItemView(){
        return (
            <View style={{margin:8}}>
                <Text>Nice world</Text>
                <Button title='button'></Button>
            </View>
        )
    }

}

const style= StyleSheet.create({
    root:{ flex:1, padding:16 },
    text:{ color:'black',fontSize:18}
})