# ReactDemo1
ReactNative框架实现 hello world

---

1.首先安装Node, Python2,JDK,Sdk,Android Studio

2.然后设置镜像，cmd中运行
> npm config set registry https://registry.npm.taobao.org --global
> npm config set disturl https://npm.taobao.org/dist --global

3.cmd中安装Yarn
> npm install -g yarn react-native-cli

4.安装完 yarn 后同理也要设置镜像源：
> yarn config set registry https://registry.npm.taobao.org --global
> yarn config set disturl https://npm.taobao.org/dist --global

5.创建项目 
> react-native init AwesomeProject
	
6.运行项目
> cd AwesomeProject
> react-native run-android

---

#### 开发者选项

ReactNative为了开发者实时调试，提供了开发者选项，可通过摇动设备打开，然后点击 `Enable Live Reload` 开启实时更新加载；点击 `Enable Hot Reloading` 开启热更新加载
开启之后，无需在每次进行更改时重新编译应用程序，都可以立即重新加载应用程序代码。
在正式包中该功能禁用。