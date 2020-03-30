import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const EventInfoScreen = (props) => {

    return(
        <View>
            <Text>Event info</Text>
            <Button title="Show map"></Button>
        </View>
    )
    
}

EventInfoScreen.navigationOptions= {
    headerTitle: 'Event info'
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default EventInfoScreen;