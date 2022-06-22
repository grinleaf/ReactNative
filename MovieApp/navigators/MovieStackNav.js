import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

//사용할 스크린 컴포넌트들을 import 하기
import MovieList from '../screens_movie/MovieList'
import MovieDetail from '../screens_movie/MovieDetail'

const Stack= createStackNavigator()

//단순 Navigator 역할만 하므로, 함수형 컴포넌트로 제작하기
const MovieStackNav= ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name='MovieList' component={MovieList}></Stack.Screen>
            <Stack.Screen name='MovieDetail' component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MovieStackNav