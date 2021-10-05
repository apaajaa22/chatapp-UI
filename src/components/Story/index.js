import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dataStory from '../../data/story.json';
const Story = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.wrapperIcon}>
          <Text style={styles.Icon}>+</Text>
        </TouchableOpacity>
        {dataStory.map(data => {
          return (
            <TouchableOpacity>
              <Image source={{uri: data.avatar}} style={styles.image} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
  },
  wrapperIcon: {
    borderRadius: 35,
    width: 70,
    height: 70,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  Icon: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});
