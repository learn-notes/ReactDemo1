import React, { Component } from 'react';
import HomeScreen from "./src/pages/HomePage"
import ButtonScreen from "./src/pages/Demo_Button"
import ScrowViewScreen from "./src/pages/Demo_ScrowView"
import ListScreen from "./src/pages/Demo_List"
import LayoutScreen from "./src/pages/Demo_layout"
import InputTextScreen from "./src/pages/Demo_InputText"
import TextScreen from "./src/pages/Demo_Text"
import Example from "./src/pages/Demo_Example"
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Button: ButtonScreen,
    ScrowView: ScrowViewScreen,
    List: ListScreen,
    Layout: LayoutScreen,
    InputText: InputTextScreen,
    Text: TextScreen,
    Example: Example,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}