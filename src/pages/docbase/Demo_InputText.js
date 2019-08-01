import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

/**
 * 输入文本
 */
export default class InputTextScreen extends Component {

  static navigationOptions = {
    title: '输入文本',
  };

  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ fontSize:30 }}
          placeholder='请输入内容'
          placeholderTextColor='red'
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

      </View>
    );
  }
}
