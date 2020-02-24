import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Heatmap } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([
    {
      latlng: {latitude: 60.199399, longitude: 24.940549},
      title: 'East West Pub',
      description: ''
    },
    {
      latlng: {latitude: 60.197864, longitude: 24.935757},
      title: 'Olutravintola Nurkka',
      description: ''
    },
    {
      latlng: {latitude: 60.196921, longitude: 24.950947},
      title: 'Musta Härkä',
      description: ''
    },
  ]);
  
  useEffect(() => {
    getLocation();
  });

  const getLocation = async() => {
    //Check permission
    let { status } =  await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert('No permission to access location');
    } else {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }
  };

  return (
    <MapView style={{ flex: 1 }}
      initialRegion={{
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      }}>
      <Marker
        coordinate={{
          latitude: location == null ? 0 : location.coords.latitude,
          longitude: location == null ? 0 : location.coords.longitude
        }} 
        pinColor='blue'
        title='My position' 
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}
      <Marker
        coordinate={{
          latitude: 60.201373,
          longitude: 24.934041
        }}
        pinColor='green' 
        title='Haaga-Helia' 
      />
    </MapView>
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
