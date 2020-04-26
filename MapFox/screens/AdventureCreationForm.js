import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Button,
    View,
    Text,
    TextInput,
    ScrollView,
} from "react-native";
import axios from "axios";

const PlacesView = () => {
    const [places, setPlaces] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        axios.get("http://open-api.myhelsinki.fi/v1/places/").then((response) => {
            console.log("promise fulfilled");
            setPlaces(response.data.data);
        });
    }, []);



    useEffect(() => {
        const results = places.filter(
            place => place.name.fi.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(results);
    }, [searchValue]);


    return (
        <View style={styles.places}>
            <View>
                <TextInput
                    placeHolder={"Etsi kohteita Helsingistä"}
                    value={searchValue}
                    onChangeText={searchValue => setSearchValue(searchValue)}
                />
            </View>
            <ScrollView>
                <View>
                    {searchResults.map((item) => (
                        <Text key={item.id}> {item.name.fi}</Text>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const AdventureCreationForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [places, setPlaces] = useState("");

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

        axios.post("http://128.199.36.67/events", eventObject).then((response) => {
        });
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
        backgroundColor: "#fff",
    },
    places: {
        marginTop: 100,
        padding: 20,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
    },
});

export default AdventureCreationForm;
