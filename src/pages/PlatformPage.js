import React, { Component } from 'react';
import { Button, View, StyleSheet, Platform, Text } from 'react-native';

/**
 * 官方文档-特定平台代码
 * 通过 Platform.OS 获取当前平台
 */
export default class PlatformScreen extends Component {

    static navigationOptions = {
        title: '官方文档-特定平台代码',
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
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Plat_获取当前平台"
                        onPress={() => this.props.navigation.push('PlatOsScreen')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Plat_获取版本信息"
                        onPress={() => this.props.navigation.push('PlatVersionScreen')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Plat_平台访问区分"
                        onPress={() => this.props.navigation.push('PlatFileScreen')}
                    />
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
    buttonContainer: {
        margin: 10
    },
});
