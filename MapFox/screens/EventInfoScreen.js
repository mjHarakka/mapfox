import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker, Heatmap } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Colors from '../constants/Colors';
import EmbeddedMap from '../components/EmbeddedMap';
import { ScrollView } from 'react-native-gesture-handler';

const EventInfoScreen = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [places, setPlaces] = useState([{}])
    const [open, setOpen] = useState(false)
    const [location, setLocation] = useState(null);
    const { params } = props.navigation.state;


    useEffect(() => {
        setTitle(params.title)
        setDescription(params.description)
        setPlaces(params.places)
        getLocation()
    }), [];

    const getLocation = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            Alert.alert('No permission to access location');
        } else {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }
    };

    const showmap = () => {
        setOpen(true)
    }

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
                    <Button color={Colors.secondaryOrange} title="Show map" onClick={() => showmap}></Button>
                    <View>
                        <View style={styles.mapContainer}>
                            {/* Tähän tulisi karttanäkymä esille, joka open staten muuttuessa
                    trueksi piirrettäisiin näkyville */}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}
EventInfoScreen.navigationOptions = {
    headerTitle: 'Event info'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: Colors.secondaryBlue,
        borderWidth: 15,

    },
    subContainer: {
        margin: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: Colors.secondaryOrange,
        marginBottom: 5,
        padding: 5,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        color: Colors.primaryBlue
    },
    text: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        borderColor: Colors.secondaryBlue,
        margin: 5,
        padding: 5
    },
    wrapper: {
        borderWidth: 2,
        borderColor: Colors.secondaryBlue,
        borderRadius: 10,
        margin: 10
    },
    mapContainer: {
        flex: 1,
        height: 250,
    },
    map: {
        height: 250
    }

});

export default EventInfoScreen;