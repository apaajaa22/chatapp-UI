import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcDummy, IcEdit, IcPhoto} from '../../assets';
import Gap from '../Gap';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={IcDummy} />
      <Gap width={10} />
      <Text style={styles.title}>Chats</Text>
      <View style={styles.wrapperButton}>
        <View style={styles.wrapperCircle}>
          <Image source={IcPhoto} />
        </View>
        <View style={styles.wrapperCircle}>
          <Image source={IcEdit} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  wrapperButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperCircle: {
    backgroundColor: 'lightgrey',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});
