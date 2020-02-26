import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import EmbeddedMap from '../components/EmbeddedMap';


const StartScreen =()=> {
    return (
      <View>
        <AppHeader/>
        <EmbeddedMap/>
      </View>
        
    )

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