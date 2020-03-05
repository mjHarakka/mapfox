import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native';

const AdventureListScreen =()=> {

  const onSelect = () => {
    Alert.alert("Pasila Tour on map");
  }

    return (
      <View>
          <Text>List of the adventures</Text>
        <TouchableOpacity onPress={onSelect}>
          <Text>Pasila Tour</Text>
          </TouchableOpacity>
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

export default AdventureListScreen;