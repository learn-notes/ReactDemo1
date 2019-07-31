import React, { Component } from 'react';
import DetailsScreen from "./src/pages/DetailsPage"
import HomeScreen from "./src/pages/HomePage"
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
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