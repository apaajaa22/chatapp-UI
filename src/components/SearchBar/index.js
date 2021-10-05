import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcSearch} from '../../assets';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={IcSearch} />
      </TouchableOpacity>
      <TextInput placeholder="Search here.." />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
