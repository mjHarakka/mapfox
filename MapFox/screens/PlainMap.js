import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Heatmap } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const PlainMap = (props) => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState();
  const [markers, setMarkers] = useState([{}]);

  //let markers = ([{
  // latlng: {
  //latitude: props.navigation.state.params.marker.latitude,
  //longitude: props.navigation.state.params.marker.longitude
  //},
  //title: props.navigation.state.params.marker.name
  //description:
  //}
  //]);

  useEffect(() => {
    getLocation();
  });

  const getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      Alert.alert("No permission to access location");
    } else {
      let position = await Location.getCurrentPositionAsync({});
      setLocation(position);
    }
  };

  const getInitialState = () => {
    return {
      region: {
        latitude: 60.196921,
        longitude: 24.950947,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      },
    };
  };

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      //onRegionChange={onRegionChange}
      onPress={(e) => e.nativeEvent}
      //initialRegion={{}}}
      //region={{
      //latitude: location == null ? 0 : location.coords.latitude,
      //longitude: location == null ? 0 : location.coords.longitude,
      //latitude: location.coords.latitude,
      //longitude: location.coords.longitude,
      //latitudeDelta: 0.0322,
      //longitudeDelta: 0.0221
      //}}>
    >
      <Marker
        coordinate={{
          latitude: location == null ? 0 : location.coords.latitude,
          longitude: location == null ? 0 : location.coords.longitude,
        }}
        pinColor="blue"
        title="My position"
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
          longitude: 24.934041,
        }}
        pinColor="green"
        title="Haaga-Helia"
      />
    </MapView>
  );
};
PlainMap.navigationOptions = {
  headerTitle: "Plain Map",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlainMap;
