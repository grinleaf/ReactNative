import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class MyComponent4 extends Component{
    //프로퍼티가 전달되지 않았을 때를 대비하기 위한 [ defaultProps ]
    static defaultProps={
        title:'untitled',
        color:'orange',
        onPress: ()=>{}
    } 

    render(){
        return(
            <View style={{margin:8}}>
                <Button title={this.props.title} onPress={this.props.onPress} color={this.props.color}></Button>
            </View>
        )
    }
}
