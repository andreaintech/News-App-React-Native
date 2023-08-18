import React, {useState} from 'react';
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';

import SearchSection from './components/SearchSection';
import LatesNewsSection from './components/LatestNewsSection';

const WIDTH = Dimensions.get('window').width;

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>

      <SearchSection />
      <LatesNewsSection />

      {/* <View style={styles.header}></View>
      <View style={styles.latestNews}></View>
      <View style={styles.categories}></View>
      <View style={styles.news}></View> */}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 38,
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