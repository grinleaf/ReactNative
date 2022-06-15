import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, Alert, TouchableHighlight, TouchableNativeFeedback, ImageBackground, ScrollView} from 'react-native'

export default class MainComponent extends Component{

    //멤버변수 영역에 화면 갱신에 영향을 미치는 변수 state 선언
    state={
        imgNum: 0,  //보여줄 이미지를 가진 배열의 인덱스번호//JS의 배열만들기 1) new Array(10,20,30)   2) []
        imgArr: [   //JS의 배열만들기 1) new Array(10,20,30)   2) []
            require('./image/a_ele.png'),
            require('./image/a_frog.png'),
            require('./image/a_lion.png'),
            require('./image/a_monkey.png'),
            require('./image/a_pig.png'),   //값에 변수 넣기 불가능. 반복문 없이 일일이 써줘야함,,
            //네트워크상 이미지
            {uri:'https://cdn.pixabay.com/photo/2022/02/17/04/54/animal-7017939_960_720.jpg'},
            {uri:'https://cdn.pixabay.com/photo/2021/10/12/11/03/background-6703215_960_720.png'},
            {uri:'https://cdn.pixabay.com/photo/2022/05/31/17/14/bird-7233900_960_720.jpg'},
            {uri:'https://cdn.pixabay.com/photo/2022/06/04/19/57/river-7242735_960_720.jpg'},
        ]  
    }

    render(){
        return(
            //* 4. 전체 뷰에 배경이미지 적용하기
            // style 에 backgroundColor 만 있고, backgroundImage 는 없음. 대신 배경 이미지용 뷰가 따로 있음! : ImageBackground
            <ScrollView style={{flex:1}} horizontal={false}>
                <ImageBackground
                
                    style={{width:'100%', height:'100%',flexDirection: 'column'}}
                    source={{uri:'https://cdn.pixabay.com/photo/2022/05/31/00/56/sky-7232494_960_720.jpg'}}
                    resizeMode= 'stretch'>
                    {/* 1. 그림 이미지는 require() 라는 함수를 이용하여 지정해야함! 별도의 스타일이 없으면 이미지 원본 사이즈로 표시됨 */}
                    <Image 
                        source={require('./image/ic_dog_02.png')} 
                        style={{width: 200, height:100,}}>
                    </Image>

                    {/* 2. 네트워크 상에 있는 이미지를 보여주기 : require() 쓰지 않음! --> uri 라는 이름의 멤버를 가진 객체 설정 */}
                    {/* RN 은 인터넷 퍼미션이 이미 디폴트로 허가된 상태! */}
                    {/** 네트워크 이미지는 디폴트 스타일이 없는 상태이므로, 사이즈 지정 스타일이 있어야만 화면에 표시됨 **/}
                    <Image
                        style={{width:200,height:100}}
                        source={{uri:'https://cdn.pixabay.com/photo/2017/03/17/10/29/coffee-2151200_960_720.jpg'}}>
                    </Image>

                    {/* 3. 이미지에 클릭이벤트 처리 : 이미지 컴포넌트는 onPress 속성이 없음! */}
                    {/* 클릭 이벤트에 반응하는 컴포넌트들이 별도로 존재함 : TouchableXXX */}
                    
                    {/* 터치 시 그림 투명도 조절 : TouchableOpacity */}
                    <TouchableOpacity onPress={this.clickImage}>
                        <Image 
                            style={{width:200, height:100}}
                            source={require('./image/a_pig.png')}>
                        </Image>
                    </TouchableOpacity>

                    {/* 터치 시 검은 배경 : TouchableHighlight */}
                    <TouchableHighlight onPress={this.clickImage} style={{padding:4, width:208}}>
                        <Image 
                            style={{width:200, height:100}}
                            source={require('./image/a_ele.png')}>
                        </Image>
                    </TouchableHighlight>

                    {/* 터치 시 물결효과. 다른 Touchable 요소와 달리 자식뷰에 효과를 적용함! (ios 버전은 없음) : TouchableNativeFeedback */}
                    <TouchableNativeFeedback 
                        onPress={this.clickImage}>
                        <View style={{padding:4, borderWidth:2, width:208, borderRadius:8, borderColor: 'green', marginLeft:16}}>
                            <Text>앙ㄴ냥냥</Text>
                            <Image 
                                style={{width:200, height:100}}
                                source={require('./image/a_frog.png')}>
                            </Image>
                        </View>
                    </TouchableNativeFeedback>

                    {/* 터치 했을 때 이미지 변경하기 */}
                    <TouchableOpacity onPress={this.changeImage}>
                        <Image
                            style={{width:200, height:100}}
                            source={this.state.imgArr[this.state.imgNum]}>
                        </Image>
                    </TouchableOpacity>

                    <Image 
                        source={require('./image/ic_dog_02.png')} 
                        style={{width: 200, height:100,}}>
                    </Image>
                </ImageBackground>
            </ScrollView>
        )
    }

    changeImage= ()=>{
        let index= this.state.imgNum+1
        if(index>this.state.imgArr.length-1) index=0
        this.setState({imgNum:index})
    }

    //이미지 클릭에 반응하는 콜백 메소드 (function 키워드 사용하지 않음 주의!)
    clickImage= ()=>{
        // Alert.alert('click image')
    }
}