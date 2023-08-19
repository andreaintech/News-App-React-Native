import React, {useState} from 'react';
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';

import SearchSection from './components/SearchSection';
import LatestNewsSection from './components/LatestNewsSection';
import LatestNewsListSection from './components/LatestNewsListSection';
import CategoriesSection from './components/CategoriesSection';
import NewsSection from './components/NewsSection';

const WIDTH = Dimensions.get('window').width;

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <SearchSection />
      <LatestNewsSection />
      <LatestNewsListSection />
      <CategoriesSection />
      <NewsSection />
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
  news: {
    borderWidth: 1,
    width: WIDTH - 30,
    height: WIDTH - 270,
  },
});