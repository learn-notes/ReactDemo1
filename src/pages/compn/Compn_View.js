import React, { Component } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

/**
 * View
 */
export default class CompnViewScreen extends Component {

    static navigationOptions = {
        title: 'View',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Child1Container} />
                <View style={styles.Child2Container} />
                <Text>Hello World!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        padding: 20,
    },
    Child1Container: {
        backgroundColor: 'blue',
        flex:0.3,
    },
    
    Child2Container: {
        backgroundColor: 'red',
        flex:0.2,
    },
    
});
