import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import TopAdventures from '../components/TopAdventures';

const StartScreen =()=> {
    return (
      <View>
        <AppHeader />
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