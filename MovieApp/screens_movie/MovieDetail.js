import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class MovieDetail extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text>MovieDetail</Text>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{ flex:1, },
})