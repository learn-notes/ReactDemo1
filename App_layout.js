import React, { Component } from 'react';
import { View } from 'react-native';

/**
 * 水平、垂直布局，权重等
 */
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>

        {/* 从左到右  */}
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        {/* 从右到左 */}
        <View style={{ flexDirection: 'row-reverse' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* 从上到下 */}
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
          </View>
          {/* 从下到上 */}
          <View style={{ flex: 1, flexDirection: 'column-reverse', justifyContent: 'space-around' }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
          </View>
        </View>
      </View>
    );
  }
}
