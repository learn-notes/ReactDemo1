import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

/**
 * 首页
 */
export default class MainScreen extends Component {

    static navigationOptions = {
        title: '官方文档学习',
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
                        title="基础模块"
                        onPress={() => this.props.navigation.push('HomeBase')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="组件和API"
                        onPress={() => this.props.navigation.push('Component')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Platform特定平台代码"
                        onPress={() => this.props.navigation.push('PlatformScreen')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title=""
                        // onPress={() => this.props.navigation.push('Layout')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title=""
                        // onPress={() => this.props.navigation.push('InputText')}
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