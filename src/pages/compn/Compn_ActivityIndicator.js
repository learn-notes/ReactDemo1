import React, { Component } from 'react';
import { Text, ActivityIndicator, StyleSheet, View } from 'react-native';

/**
 * 圆形的 loading 提示符号 
 */
export default class ActivityIndicatorScreen extends Component {

    static navigationOptions = {
        title: 'ActivityIndicator',
    };

    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                {/* <ActivityIndicator hidesWhenStopped={false} animating={false} size="large" color="#0000ff" /> */}
                <ActivityIndicator  size="large" color="#0000ff" />
                <ActivityIndicator size="small" color="#00ff00" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }

});
