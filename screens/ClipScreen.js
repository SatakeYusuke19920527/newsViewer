import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';

const ClipScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.user.clips}
        renderItem={({ item }) => {
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => {}}
          />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ClipScreen);
