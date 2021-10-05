import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChatItem from './src/components/ChatItem';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import Story from './src/components/Story';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Story />
      <ChatItem />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
