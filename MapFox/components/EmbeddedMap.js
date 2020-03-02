import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function EmbeddedMap() {

return (
   
    <View style={styles.mapContainer}>
    <MapView style={styles.map}
        initialRegion={{
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      }}>
      <Marker
        coordinate={{
          latitude: 60.201373,
          longitude: 24.934041
        }}
        pinColor='green' 
        title='Haaga-Helia' 
      />
    </MapView>
    </View>
    
 
    );

}

const styles = StyleSheet.create({
    mapContainer: {
        height: 200
    },
    map: {
        height: 200
    }
})

