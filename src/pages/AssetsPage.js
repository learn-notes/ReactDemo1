import React, { Component } from 'react';
import { Button, View, StyleSheet, Image, ImageBackground, Text } from 'react-native';

/**
 * 官方文档-Assets资源
 */
export default class AssetsScreen extends Component {

    static navigationOptions = {
        title: '官方文档-Assets资源',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <ImageBackground
                source={require('../img/img_bg.jpg')}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>

                    <Text>1.引用的静态图片资源</Text>
                    <Image
                        source={require('../img/img_one.jpg')}
                        style={{ width: '100%', height: 100 }}
                    />

                    <Text>2.引用的Native图片资源(即Android 的 drawable 目录)</Text>
                    <Image
                        source={{ uri: 'app_icon' }}
                        style={{ width: 100, height: 100 }}
                    />

                    <Text>3.引用的网络图片资源</Text>
                    <Image
                        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                        style={{ width: 100, height: 100 }}
                    />

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10,
    },
    buttonContainer: {
        margin: 10
    },
});
