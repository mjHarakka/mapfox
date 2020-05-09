import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    ScrollView,
    Alert,
    TouchableNativeFeedback,
} from "react-native";
import axios from "axios";
import { Input, Button, Text } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler";
import Colors from '../constants/Colors'

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
            "Do you want to add " + item.name.fi + " in to your event?",
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

    const deletePlace = (item) => {
        const updatedPlaces = [...places];
        updatedPlaces.splice(item, 1);
        Alert.alert(
            "",
            "Are you sure you want to remove " + item.name + " from your event?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                { text: "OK", onPress: () => setPlaces(updatedPlaces) },
            ],
            { cancelable: false }
        );
    }

    const postEventObject = (event) => {
        event.preventDefault;

        const eventObject = {
            title: title,
            description: description,
            places: places
        };

        Alert.alert(
            "",
            "Are you sure you want to create the event " + title + "?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "OK", onPress: () => axios
                        .post("http://128.199.36.67/events", eventObject)
                        .then((response) => { })
                },
            ],
            { cancelable: false }
        );


    };

    const listSeparator = () => {
        return (
            <View
                style={{
                    height: 5,
                    width: "100%",
                    backgroundColor: "#fff",
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <Input
                    label={"Title of your event"}
                    placeholder={"Choose a title"}
                    onChangeText={(title) => setTitle(title)}
                    value={title}
                />
                <Input
                    label={"Descrtiption of your event"}
                    placeholder={"Write the description of your event"}
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={(description) => setDescription(description)}
                    value={description}
                />

            </View>
            <View style={styles.places}>
                <View style={styles.inputStyle}>
                    <Input
                        label={"Places for your event"}
                        placeholder={"Search for different places"}
                        value={searchValue}
                        onChangeText={(searchValue) => setSearchValue(searchValue)}
                    />
                </View>
                <ScrollView>
                    <View>
                        {searchResults.map((item) => (
                            <Text style={{ fontSize: 18 }} onPress={() => addPlaces(item)} key={item.id}>
                                {" "}
                                {item.name.fi}
                            </Text>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <Text h4>Places in my event</Text>
            <View style={styles.listContainer}>
                <FlatList
                    ItemSeparatorComponent={listSeparator}
                    data={places}
                    keyExtractor={(item) => item.name}
                    renderItem={(itemData) => <View style={styles.listItem}>
                        <Text style={{ fontSize: 18 }}>{itemData.item.name}</Text><Text style={styles.deleteText} color='red' onPress={() => deletePlace(itemData.item)}> Poista</Text>
                    </View>
                    }
                />
            </View>
            <View style={styles.button}>
                <Button disabled={title.length === 0 || description.length === 0 || places.length === 0} title={"Create new adventure"} onPress={postEventObject}></Button>
            </View>
        </View>
    );
};



AdventureCreationForm.navigationOptions = {
    headerTitle: "Create an adventure",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        margin: 4,
    },
    inputs: {
        borderRadius: 2,
        alignContent: 'center',
        marginBottom: 10,
    },
    places: {
        height: "30%",
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
    },
    button: {
        margin: 10,

    },
    inputStyle: {
        backgroundColor: "white",

    },
    listContainer: {
        height: "20%",
        backgroundColor: "#ccc",
        borderWidth: 1,
    },
    listItem: {
        flexDirection: "row",
    },
    deleteText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#C70039',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    }
});

export default AdventureCreationForm;
