import React, { Component } from 'react';

import MainScreen from "./src/pages/MainPage"

import DocBaseScreen from "./src/pages/DocBasePage"
import ButtonScreen from "./src/pages/docbase/Demo_Button"
import ScrowViewScreen from "./src/pages/docbase/Demo_ScrowView"
import ListScreen from "./src/pages/docbase/Demo_List"
import LayoutScreen from "./src/pages/docbase/Demo_layout"
import InputTextScreen from "./src/pages/docbase/Demo_InputText"
import TextScreen from "./src/pages/docbase/Demo_Text"
import Example from "./src/pages/docbase/Demo_Example"

import ComponentScreen from "./src/pages/ComponentPage"
import CompnViewScreen from "./src/pages/compn/Compn_View"
import CompnInputScreen from "./src/pages/compn/Compn_input"

import PlatformScreen from "./src/pages/PlatformPage"
import PlatOsScreen from "./src/pages/platform/Plat_OS"
import PlatVersionScreen from "./src/pages/platform/Plat_Version"
import PlatFileScreen from "./src/pages/platform/Plat_Flie"

import AssetsScreen from "./src/pages/AssetsPage"

import AnimateScreen from "./src/pages/AnimatePage"


import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    // 首页
    Main: MainScreen,

    // 官方文档-基础部分
    HomeBase: DocBaseScreen,
    Button: ButtonScreen,
    ScrowView: ScrowViewScreen,
    List: ListScreen,
    Layout: LayoutScreen,
    InputText: InputTextScreen,
    Text: TextScreen,
    Example: Example,

    // 官方文档-组件和API
    Component: ComponentScreen,
    CompnViewScreen: CompnViewScreen,
    CompnInputScreen: CompnInputScreen,

    // 官方文档-特定平台
    PlatformScreen: PlatformScreen,
    PlatOsScreen: PlatOsScreen,
    PlatVersionScreen: PlatVersionScreen,
    PlatFileScreen: PlatFileScreen,

    // asset资源
    AssetsScreen: AssetsScreen,

    // 动画
    AnimateScreen: AnimateScreen,

  },
  {
    initialRouteName: 'Main',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}