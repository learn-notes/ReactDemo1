import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

/**
 * 官方文档-组件和API
 */
export default class ComponentScreen extends Component {

    static navigationOptions = {
        title: '官方文档-组件和API',
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
            <ScrollView >
                <View style={styles.buttonContainer}>
                    <Button
                        title="View"
                        onPress={() => this.props.navigation.push('CompnViewScreen')}
                    />
                </View>

                {/* <View style={styles.buttonContainer}>
                    <Button
                        title="Compn_"
                        onPress={() => this.props.navigation.push('CompnInputScreen')}
                    />
                </View> */}

                {/* 圆形loading提示符 */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="圆形loading"
                        onPress={() => this.props.navigation.push('ActivityIndicatorScreen')}
                    />
                </View>

                {/* 按钮的使用 */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="按钮"
                        onPress={() => this.props.navigation.push('CompnButtonScreen')}
                    />
                </View>

                {/* <View style={styles.buttonContainer}>
                    <Button
                        title="Compn_"
                        // onPress={() => this.props.navigation.push('InputText')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Compn_"
                        // onPress={() => this.props.navigation.push('Text')}
                    />
                </View> */}

            </ScrollView>
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