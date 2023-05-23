/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Home } from './src/screens/Home';


function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor:Colors.darker,
  
  };

  return (
    <SafeAreaView style={styles.conatiner}  >
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Home />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
});

export default App;
