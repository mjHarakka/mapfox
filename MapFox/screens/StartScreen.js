import React from 'react';
import { StyleSheet, View, StatusBar, Button, Text } from 'react-native';
import EmbeddedMap from '../components/EmbeddedMap';
import AppHeader from '../components/AppHeader';
import TopAdventures from '../components/TopAdventures';
import Colors from '../constants/Colors'


const StartScreen = (props) => {
  return (
    <View style={styles.container}>
      {/*console.log(props)*/}
      <StatusBar hidden={true} />
      <View style={styles.appHeader}>
        <AppHeader navigation={props.navigation} />
      </View>
      <View style={styles.mapView}>
        <EmbeddedMap navigation={props.navigation} />
      </View>
      <View style={styles.TopAdventures}>
        <TopAdventures />
      </View>
    </View>
  );
};
StartScreen.navigationOptions = {
  headerTitle: 'Welcome to MapFox'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryBlue
  },
  mapView: {
    justifyContent: 'center',
    height: '33%'
  },
  appHeader: {
    justifyContent: 'center',
    height: '13%'
  },
  TopAdventures: {
    justifyContent: 'center',
    height: '33%'
  },
});

export default StartScreen;