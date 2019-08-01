import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { yellow } from 'ansi-colors';

/**
 * text,image,字体样式,宽高
 */
const styles = StyleSheet.create(
  {
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red'
    }
  }
);


export default class TextScreen extends Component {

  static navigationOptions = {
    title: '文本图片',
  };

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ alignItems: "center" }}>
        <View>
          <Text style={styles.red}>Hello, world!</Text>
        </View>
        <View>
          <Image source={pic} style={{ width: 193, height: 110 }} />
        </View>
        <View>
          <ZdyText userName="Xiao ming" />
        </View>

        <Text style={styles.bigBlue}>带颜色字体</Text>

        <Text style={{ color: 'red', width: 100, height: 100, backgroundColor: 'yellow' }}>带颜色字体</Text>

      </View>
    );
  }
}

class ZdyText extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>Hello! {this.props.userName}, Good Morning.</Text>
      </View>
    )
  }
}