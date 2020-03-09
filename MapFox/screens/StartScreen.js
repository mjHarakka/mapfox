import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import AppHeader from '../components/AppHeader';
import EmbeddedMap from '../components/EmbeddedMap';
import TopAdventures from '../components/TopAdventures';


const StartScreen =(props) => {
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <AppHeader />
        <Button title="Create an adventure?" onPress={() => {
                props.navigation.navigate('AdventureCreationForm');
            }} />
        <Button title="Seek a new adventure?" onPress={() => {
                props.navigation.navigate('AdventureList');
            }} />
      </View>
      <View style={styles.component}>
        <EmbeddedMap />
      </View>
      <View style={styles.component}>
        <TopAdventures />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  component: {
    height: '33%'
  }
});

export default StartScreen;