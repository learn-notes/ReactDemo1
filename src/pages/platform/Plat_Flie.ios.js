import React, { Component } from 'react';
import { Button, View, StyleSheet, Platform, Text } from 'react-native';

/**
 * 官方文档-更具不同的平台访问不同的文件
 */
export default class PlatFileScreen extends Component {

    static navigationOptions = {
        title: 'IOS平台展示',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.platform1Container}>
                    <Text style={{ fontSize: 16, color: 'white' }}>IOS平台专属页面</Text>
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
        padding: 10,
        ...Platform.select({
            ios: {
                backgroundColor: "red"
            },
            android: {
                backgroundColor: "black"
            }
        })
    },

});
