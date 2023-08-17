import React from 'react';
import {SafeAreaView,StyleSheet,View, Dimensions} from 'react-native';

import Home from './src/containers/home';
import NewsDetail from './src/containers/news-detail';
import Search from './src/containers/search';
import Notification from './src/containers/notification';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
});

export default App;
