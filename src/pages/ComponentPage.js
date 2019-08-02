import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

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
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Compn_View"
                        onPress={() => this.props.navigation.push('CompnViewScreen')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Compn_"
                        onPress={() => this.props.navigation.push('CompnInputScreen')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Compn_"
                        // onPress={() => this.props.navigation.push('List')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Compn_"
                        // onPress={() => this.props.navigation.push('Layout')}
                    />
                </View>

                <View style={styles.buttonContainer}>
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