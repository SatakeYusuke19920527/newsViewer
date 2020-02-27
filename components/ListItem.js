import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const ListItem = ({ imageUrl, title, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.picture}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  picture: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    color: 'gray',
    fontSize: 12,
  },
});

export default ListItem;
