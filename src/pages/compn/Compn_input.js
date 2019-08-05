import React, { Component } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

/**
 * InputText
 */
export default class CompnInputScreen extends Component {

    static navigationOptions = {
        title: 'View',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>暂未填充!</Text>
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
