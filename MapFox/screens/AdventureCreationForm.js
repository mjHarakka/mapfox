import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Button,
    View,
    Text,
    TextInput,
    ScrollView,
    Alert,
} from "react-native";
import axios from "axios";

const PlacesView = () => {
    const [locations, setLocations] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get("http://open-api.myhelsinki.fi/v1/places/").then((response) => {
            console.log("promise fulfilled");
            setLocations(response.data.data);
        });
    }, []);

    useEffect(() => {
        const results = locations.filter((location) =>
            location.name.fi.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(results);
    }, [searchValue]);

    const addPlaces = (item) => {
        const placeObject = {
            name: item.name.fi,
            description: item.description.body,
            latitude: item.location.lat,
            longitude: item.location.lon,
        };
        Alert.alert(
            "",
            "Haluatko lisätä kohteen " + item.name.fi + " tapahtumaasi?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                { text: "OK", onPress: () => setPlaces((places) => [...places, placeObject]) },
            ],
            { cancelable: false }
        );
    };

    const logger = () => {
        console.log(places);
    };

    return (
        <View style={styles.places}>
            <View style={styles.inputStyle}>
                <TextInput
                    placeholder={"hae paikkoja"}
                    value={searchValue}
                    onChangeText={(searchValue) => setSearchValue(searchValue)}
                />
            </View>
            <ScrollView>
                <View>
                    {searchResults.map((item) => (
                        <Text onPress={() => addPlaces(item)} key={item.id}>
                            {" "}
                            {item.name.fi}
                        </Text>
                    ))}
                </View>
                <Button title={"Press"} onPress={logger}></Button>
            </ScrollView>
        </View>
    );
};

const AdventureCreationForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [eventObject, setEventObject] = useState({
        title: "",
        description: "",
        places: [
            {
                name: "",
                latitude: 0.0,
                longitude: 0.0,
            },
        ],
    });

    const handleChange = (event) => {
        setEventObject({ ...eventObject, [event.target.name]: event.target.value });
    };

    const addEventObject = (event) => {
        event.preventDefault();
        const eventObject = {
            title: newTitle,
            description: newDescription,
            places: [
                {
                    newName: "",
                    newLatitude: 0.0,
                    newLongitude: 0.0,
                },
            ],
        };
    };

    const postEventObject = (event) => {
        event.preventDefault;

        const eventObject = {
            title: title,
            description: description,
            places: [
                {
                    name: "b",
                    latitude: 0.0,
                    longitude: 0.0,
                },
            ],
        };

        axios
            .post("http://128.199.36.67/events", eventObject)
            .then((response) => { });
    };

    return (
        // TODO Scroll Bar
        // TODO Joka placesil individual lisäysnappi jolla sen saa tökättyä eventtii
        // Postaus toimii mut places menee vaa tyhjänä listana backendii koska siihen ei oo logiikkaa atm
        // Katotaa varmaa näist suurin osa sit yhes
        <View style={styles.container}>
            <Text>Create an adventure here</Text>
            <TextInput
                placeholder={"Otsikko"}
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                onChangeText={(title) => setTitle(title)}
                value={title}
            />
            <TextInput
                placeholder={"Kuvaus tapahtumasta"}
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                onChangeText={(description) => setDescription(description)}
                value={description}
            />
            <PlacesView />

            <Button title={"Press"} onPress={postEventObject}></Button>
        </View>
    );
};

AdventureCreationForm.navigationOptions = {
    headerTitle: "My adventures",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    places: {
        height: "30%",
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
    },
    inputStyle: {
        borderBottomColor: "#000",
        backgroundColor: "white",
        borderBottomWidth: 2,
        color: 'red'
    },
});

export default AdventureCreationForm;
