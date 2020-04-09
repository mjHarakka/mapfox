import React from 'react';
import {StyleSheet, Button, View, Text, TextInput } from 'react-native';
import axios from 'axios'

const SearchForm = (props) => {
    return (
      <View>
        <TextInput placeHolder={'Etsi kohteita Helsingistä'} value={props.searchValue} onChange={props.handleSearch} />
      </View>
    ) 
}
  
const Places = (props) => {

        return (
        
          <View>
            {props.results.map(result => <Text key={result.id} > {result.name.fi}</Text>)}
          </View>
        )
    
}

const PlacesView = () => {
    const [places, setPlaces] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
  
    const handleSearch = (event) => {
      console.log(event.target.value)
      setSearchValue(event.target.value)
    }
  
    // Vanilla React JS:l toimii tää filtteröinti funktio mikä lisää resultseihi placesit jotka mätsää hakutekstin kanssa
    // TODO: Why won't it work?! Pls fix ( ͡° ͜ʖ ͡°)
    const results = places.filter(place => place.name.fi.indexOf(searchValue) != -1)



    React.useEffect(() => {
      console.log('effect')
      axios
        .get('http://open-api.myhelsinki.fi/v1/places/')
        .then(response => {
          console.log('promise fulfilled')
          setPlaces(response.data.data)
        })
    }, [])

    console.log('render', places.length, 'places')
    console.log(places)
  
    return (

      <View>
      <SearchForm searchValue={searchValue} handleSearch={handleSearch} />
      <Places results={results}/>
      
  
      </View>
    )
 }

const AdventureCreationForm = () => {

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [places, setPlaces] = React.useState('')


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
            title: title,
            description: description,
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

   

    return (
        // TODO Scroll Bar
        // TODO Joka placesil individual lisäysnappi jolla sen saa tökättyä eventtii
        // Postaus toimii mut places menee vaa tyhjänä listana backendii koska siihen ei oo logiikkaa atm
        // Katotaa varmaa näist suurin osa sit yhes
        <View style={styles.container}>
            <Text>Create an adventure here</Text>
            <TextInput
                placeholder={'Otsikko'}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={title => setTitle(title)}
                value={title}
                />
            <TextInput
                placeholder={'Kuvaus tapahtumasta'}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={description => setDescription(description)}
                value={description}
            />
            <PlacesView />

            

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