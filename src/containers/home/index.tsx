import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const Home = () => {
  return (
    <>
      <View style={styles.search}></View>
      <View style={styles.header}></View>
      <View style={styles.latestNews}></View>
      <View style={styles.categories}></View>
      <View style={styles.news}></View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
    search: {
      borderWidth: 1,
      width: WIDTH - 30,
      height: 32,
    },
    header: {
      borderWidth: 1,
      width: WIDTH - 30,
      height: 32,
    },
    latestNews: {
      borderWidth: 1,
      width: WIDTH - 30,
      height: WIDTH - 135,
    },
    categories: {
      borderWidth: 1,
      width: WIDTH - 30,
      height: 32,
    },
    news: {
      borderWidth: 1,
      width: WIDTH - 30,
      height: WIDTH - 270,
    },
  });