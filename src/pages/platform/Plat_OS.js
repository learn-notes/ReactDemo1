import React, { Component } from 'react';
import { Button, View, StyleSheet, Platform, Text } from 'react-native';

/**
 * 官方文档-获取当前平台
 * 通过 Platform.OS 获取当前平台
 */
export default class PlatOsScreen extends Component {

    static navigationOptions = {
        title: '获取当前平台',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.platform1Container}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Android平台占屏幕的二分之一；IOS平台占屏幕的四分之一</Text>
                </View>

                <View style={styles.platform2Container}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Android平台显示绿色；IOS平台显示红色</Text>
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
        /// 判断是什么平台
        flex: Platform.OS === "ios" ? 0.5 : 1,
        backgroundColor: 'black',
        padding: 10
    },

    platform2Container: {
        flex: 1,
        padding: 10,
        ...Platform.select({
            ios: {
                backgroundColor: "red"
            },
            android: {
                backgroundColor: "blue"
            }
        })
    }
});
