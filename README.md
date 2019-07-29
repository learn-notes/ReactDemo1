# ReactDemo1
ReactNative框架实现 hello world

---

1.首先安装Node, Python2,JDK,Sdk,Android Studio

2.然后设置镜像，cmd中运行
	npm config set registry https://registry.npm.taobao.org --global
	npm config set disturl https://npm.taobao.org/dist --global
3.cmd中安装Yarn
	npm install -g yarn react-native-cli

4.安装完 yarn 后同理也要设置镜像源：
	yarn config set registry https://registry.npm.taobao.org --global
	yarn config set disturl https://npm.taobao.org/dist --global

5.创建项目 
	react-native init AwesomeProject
	
6.运行项目
	cd AwesomeProject
	react-native run-android
