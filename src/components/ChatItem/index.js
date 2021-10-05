import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import DataChat from '../../data/chat.json';
import Gap from '../Gap';
const ChatItem = () => {
  return (
    <View>
      <ScrollView>
        {DataChat.map(data => {
          return (
            <View style={styles.wrapperContent}>
              <Image source={{uri: data.avatar}} style={styles.image} />
              <Gap width={10} />
              <View>
                <Text
                  style={
                    styles.title
                  }>{`${data.first_name} ${data.last_name}`}</Text>
                <Text>{data.text}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
});
