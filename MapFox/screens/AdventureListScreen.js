import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List,ListItem } from 'react-native-elements'

const AdventureListScreen =(props)=> {

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
              onPress={()=> {
                props.navigation.navigate('MapScreen');
            }} />
          ))
        }
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