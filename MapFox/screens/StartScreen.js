import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import MapScreen from '../screens/MapScreen';
import TopAdventures from '../components/TopAdventures';


const StartScreen =()=> {
    return (
      <View>
        <AppHeader/>
        <MapScreen />
        <TopAdventures />
      </View>
        
    );

        
        
     
   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });



export default StartScreen;