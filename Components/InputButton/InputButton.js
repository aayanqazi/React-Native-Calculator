import React , {Component} from "react";
import {
    View,
    Text,
    TouchableHighlight
} from "react-native";

import styling from "../../Style";

export default class InputBUtton extends Component {
    render(){
        return (
            <TouchableHighlight style={styling.inputButton} underlayColor="#193441"
            onPress={this.props.onPress}>
            <View style={styling.inputButton}>
                <Text style={styling.inputButtonText}>{this.props.value}</Text>
                </View>
                </TouchableHighlight>
        )
    }
}