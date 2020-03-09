import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native';
import { List,ListItem } from 'react-native-elements'

const AdventureListScreen =()=> {

  const onSelect = () => {
    Alert.alert("Pasila Tour on map");
  }

  const list = [
    {
        name: 'Pasila Tour'
         
    }, 
    {
      name: 'Sight spotting'
       
  }, 
  ]
  

    return (
      <View>
        {
          list.map((l,i)=> (
            <ListItem
              key={i}
              title={l.name}
              bottomDivider
              chevron
              onPress={()=> onSelect()}
            />
          ))
        }
        
        
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