import React, { Component } from 'react';
import { Button, View, StyleSheet, Platform, Text } from 'react-native';

/**
 * 官方文档-获取版本信息
 */
export default class PlatVersionScreen extends Component {

    static navigationOptions = {
        title: '获取当前平台',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.platform1Container}>
                {/* 在 iOS 上，Version属性是-[UIDevice systemVersion]的返回值，具体形式为一个表示当前系统版本的字符串。比如可能是"10.3"。 */}
                    <Text style={{ fontSize: 16, color: 'white' }}>当前系统版本：{parseInt(Platform.Version, 0)} （{Platform.OS}）</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    platform1Container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    },

});
