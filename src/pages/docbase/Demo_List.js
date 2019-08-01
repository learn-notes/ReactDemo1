import React, { Component } from 'react';
import { View, FlatList, StyleSheet, SectionList, Text } from 'react-native';

/**
 * ListView的使用
 */
export default class ListScreen extends Component {

  static navigationOptions = {
    title:"ListView的使用"
  }

  render() {
    return (
      <View>
        {/* <FlatList
          data={[
            { key: "1" },
            { key: "2" },
            { key: "3" },
            { key: "4" },
            { key: "5" },
            { key: "6" },
            { key: "7" },
            { key: "8" },
            { key: "9" },
            { key: "10" },
            { key: "11" },
          ]}
          renderItem={({item})=><Text>{item.key}</Text>}
        /> */}

        <SectionList
          sections={[
            { title: 'D', data: ['Devin'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
            { title: 'M', data: ['Mackson', 'Mames', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
