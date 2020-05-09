import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const EmbeddedMap = props => {

  const onPressMap = () => {
    //console.log(props);
    props.navigation.navigate('PlainMap');

  }

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 60.200692,
          longitude: 24.934302,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}
        onPress={onPressMap}
      >
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
    flex: 1,
    height: 250,
  },
  map: {
    height: 250
  }
});

export default EmbeddedMap;

