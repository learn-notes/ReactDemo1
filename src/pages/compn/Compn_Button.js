import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

/**
 * Button
 */
export default class CompnButtonScreen extends Component {

    static navigationOptions = {
        title: 'Button',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this._onPressButton}
                    color="#841584"
                    title="按钮文字"
                />
            </View>
        );
    }

    _onPressButton() {
        Alert.alert('你点击了这个按钮!')
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
});
