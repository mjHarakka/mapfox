import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const EmbeddedMap = props => {

  const onPressMap = () => {
    //Alert.alert("MapScreen with nearest adventures");
    console.log(props);
    props.navigation.navigate('PlainMap');

  }

  return (
    <View style={styles.mapContainer}>
        <TouchableOpacity onPress={onPressMap} style={{padding: 10, backgroundColor: 'red'}}>
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
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        height: 200
    },
    map: {
        height: 200
    }
});

export default EmbeddedMap;

