import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/AppHeader';
import EmbeddedMap from './components/EmbeddedMap';
import TopAdventures from './components/TopAdventures'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <AppHeader />
      </View>
      <View style={styles.component}>
        <EmbeddedMap />
      </View>
      <View style={styles.component}>
        <TopAdventures />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  component: {
    height: '33%'
  }
});

export default App;
