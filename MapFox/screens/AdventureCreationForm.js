import React from 'react';
import {StyleSheet, Button, View, Text, TextInput } from 'react-native';
import axios from 'axios'

const AdventureCreationForm = () => {

    const [eventObject, setEventObject] = React.useState({
        title: '',
        description: '',
        places: [{
            name: '',
            latitude: 0.0,
            longitude: 0.0
        }]
    })

    const handleChange = (event) => {
        setEventObject({ ...eventObject, [event.target.name]: event.target.value })
    }

    const addEventObject = (event) => {
        event.preventDefault()
        const eventObject = {
            title: newTitle,
            description: newDescription,
            places: [{
                newName: '',
                newLatitude: 0.0,
                newLongitude: 0.0
            }]
        }
    
        
    }

    const postEventObject = (event) => {
        event.preventDefault
    
        const eventObject = {
            title: 'a',
            description: 'a',
            places: [{
                name: 'b',
                latitude: 0.0,
                longitude: 0.0
            }]
        }

        axios
        .post('http://128.199.36.67/events', eventObject)
        .then(response => {
            console.log(response)
        })
    }

    /*
    const postEventObject = () => fetch('http://128.199.36.67/events', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: 'a',
            description: 'a',
            places: [{
                name: 'a',
                latitude: 0.0,
                longitude: 0.0
            }]
        }) 
        .catch(err => console.error(err))
        
    })
    */
   
    return (
        <View style={styles.container}>
            <Text>Create an adventure here</Text>
            {/*
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
            */}
            <Button title={'Press'} onPress={postEventObject}></Button>

        </View>
    );
};


AdventureCreationForm.navigationOptions= {
    headerTitle: 'My adventures'
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default AdventureCreationForm;