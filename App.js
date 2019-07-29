import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';


export default class HelloWorldApp extends Component {
  render() {
	  let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <View style={{alignItems:"center"}}>
          <View>
            <Text>Hello, world!</Text>
          </View>
           <View>
             <Image source={pic} style={{width: 193, height: 110}} />
           </View>
        </View> 
    );
  }
}