import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import MapView, { Marker, Heatmap } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Colors from "../constants/Colors";
import EmbeddedMap from "../components/EmbeddedMap";
import { ScrollView } from "react-native-gesture-handler";

const EventInfoScreen = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [places, setPlaces] = useState([{}]);
    const [open, setOpen] = useState(false);
    const { params } = props.navigation.state;

    useEffect(() => {
        setTitle(params.title);
        setDescription(params.description);
        setPlaces(params.places);
    }),
        [];

    const showmap = () => {
        setOpen(true);
    };

    const markers = [
        {
            latlng: { latitude: places.latitude, longitude: places.longitude },
            title: places.title,
            description: places.description,
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.subContainer}>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.title}>Event name</Text>
                            <Text style={styles.text}>{title}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.title}>Event description</Text>
                            <Text style={styles.text}>{description}</Text>
                        </View>
                    </View>
                    <Text style={styles.mapTitle}>Event markers</Text>
                    <View>
                        <View style={styles.mapContainer}>
                            <MapView
                                style={{ flex: 1 }}
                                initialRegion={{
                                    latitude: places == undefined ? 60.201373 : places[0].latitude,
                                    longitude: places == undefined ? 24.934041 : places[0].longitude,
                                    latitudeDelta: 0.0322,
                                    longitudeDelta: 0.0221,
                                }}
                            >
                                {places.map(
                                    (marker, index) => (
                                        console.log(places),
                                        (
                                            <Marker
                                                key={index}
                                                coordinate={{
                                                    latitude:
                                                        places == null ? 0 : marker.latitude,
                                                    longitude:
                                                        places == null ? 0 : marker.longitude,
                                                }}
                                                title={places == null ? "" : marker.name}
                                                description={places == null ? "" : marker.description}
                                                pinColor="blue"
                                            />
                                        )
                                    )
                                )}
                            </MapView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
EventInfoScreen.navigationOptions = {
    headerTitle: "Event info",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        borderColor: Colors.secondaryBlue,
        borderWidth: 15,
    },
    subContainer: {
        margin: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        backgroundColor: Colors.secondaryOrange,
        marginBottom: 5,
        padding: 5,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        color: Colors.primaryBlue,
    },
    mapTitle: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        backgroundColor: Colors.secondaryOrange,
        marginBottom: 5,
        padding: 5,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        color: Colors.primaryBlue,
        borderColor: Colors.primaryBlue,
        borderWidth: 2
    },
    text: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        borderColor: Colors.secondaryBlue,
        margin: 5,
        padding: 5,
    },
    wrapper: {
        borderWidth: 2,
        borderColor: Colors.secondaryBlue,
        borderRadius: 10,
        margin: 10,
    },
    mapContainer: {
        flex: 1,
        height: 250,
    },
    map: {
        height: 250,
    },
});

export default EventInfoScreen;
