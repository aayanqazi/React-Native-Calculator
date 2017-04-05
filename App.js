import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styling from "./Style.js";
import InputButton from "./Components/InputButton/InputButton"
import { COLOR, ThemeProvider ,Toolbar,Dialog, DialogDefaultActions} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome'
import {Constants} from "expo";

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, 'AC', '=', '+']
];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
      selectedSymbol: null,
      previousInputValue: 0,
      open:false
    }
  }
  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }
  _handleStringInput(val) {
    switch (val) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: val,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;
        if (!symbol) {
          return;
        }
        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;
      case "AC":
        this.setState({
          inputValue: 0,
          selectedSymbol: null,
          previousInputValue: 0,
        })
    }

  }
  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
      inputValue: inputValue
    })
  }
_dialogBOx(){
  return (
    <Dialog>
        <Dialog.Title><Text>Arsalan Sabir</Text></Dialog.Title>
        <Dialog.Content>
          <Text>
            Created By Arsalan Sabir
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <DialogDefaultActions
             actions={['Cancell']}
             onActionPress={() => {this.setState({open:false})}}
          />
        </Dialog.Actions>
      </Dialog>
  )
}
  _renderInputButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <InputButton value={input} key={r + "-" + i} onPress={this._onInputButtonPressed.bind(this, input)} />
        );
      }

      views.push(<View style={styling.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }
  render() {
    const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,     
        },
    }
}
    return (
      <ThemeProvider uiTheme={uiTheme}>
      <View style={styling.container}>
        <Toolbar
        centerElement="Calculator"
        leftElement={<Icons name = "ellipsis-v" color="white" size={30} style={{padding:10}}/>}
        rightElement={<Icon name="calculator" color="white" size={30} onPress={()=>{this.setState({open:true})}}/>}
      />
        <View style={styling.displayContainer}>
          
          <Text style={styling.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={styling.inputContainer}>
          
          {this.state.open?this._dialogBOx():this._renderInputButtons()}
        </View>

      </View>
      </ThemeProvider>
    );
  }
}

