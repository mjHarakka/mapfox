import React from 'react';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
// import AppHeader from '../components/AppHeader';
import EmbeddedMap from '../components/EmbeddedMap';
import TopAdventures from '../components/TopAdventures';


const StartScreen =(props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden = {true} />
        <View style={styles.component}>
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
StartScreen.navigationOptions= {
  headerTitle: 'Welcome to MapFox'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  },
  component: {
    justifyContent: 'center',
    height: '33%'
  }
});

export default StartScreen;