import React from 'react';
import { StyleSheet, View } from 'react-native';
import FetchData from '../components/FetchData';

const AdventureListScreen =(props)=> {
  

    return (
      <View>
          <FetchData navigation= {props.navigation} />
      </View>
    );
};
  AdventureListScreen.navigationOptions= {
    headerTitle: 'Adventure list'
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AdventureListScreen;