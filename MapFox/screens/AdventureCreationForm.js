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

const AdventureCreationForm = () => {
    const [locations, setLocations] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
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

    const postEventObject = (event) => {
        event.preventDefault;

        const eventObject = {
            title: title,
            description: description,
            places: places
        };

        axios
            .post("http://128.199.36.67/events", eventObject)
            .then((response) => { });
    };

    const logger = () => {
        console.log(places);
    };

    return (
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
                </ScrollView>
            </View>
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
