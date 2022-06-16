import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class MyComponent3 extends Component{
    render(){
        return(
            <View style={{margin:8}}>
                {/* <Text>Component 3</Text> */}
                <Button title={this.props.title} onPress={this.props.onPress}></Button>
            </View>
        )
    }
}
