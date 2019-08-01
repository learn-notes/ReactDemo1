import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: '首页',
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
                        title="Demo_Button"
                        onPress={() => this.props.navigation.push('Button')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Demo_SceowView"
                        onPress={() => this.props.navigation.push('ScrowView')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Demo_List"
                        onPress={() => this.props.navigation.push('List')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Demo_Layout"
                        onPress={() => this.props.navigation.push('Layout')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Demo_InputText"
                        onPress={() => this.props.navigation.push('InputText')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Demo_Text"
                        onPress={() => this.props.navigation.push('Text')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Demo_Example"
                        onPress={() => this.props.navigation.push('Example')}
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