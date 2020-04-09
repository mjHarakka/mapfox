import React from 'react';
import {StyleSheet, Button, View, Text, TextInput } from 'react-native';
import axios from 'axios'

const SearchForm = (props) => {
    return (
      <View>
        <Text>Find countries: </Text><TextInput value={props.searchValue} onChange={props.handleSearch} />
      </View>
    ) 
  }
  
  const CountryView = (props) => {
    const country = props.country 
    return (
      <View>
      <Text>{country.name}</Text>
  
  
      </View>
    )
  }
  
  
  
  const Countries = (props) => {
  
    
        return (
        
          <View>
            {props.results.map(result => <Text key={result.alpha3Code} >{result.name}</Text>)}
          </View>
        )
      
      
    
}
  

const Places = () => {
    const [countries, setCountries] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
  
    const handleSearch = (event) => {
      console.log(event.target.value)
      setSearchValue(event.target.value)
    }
  
    const results = countries.filter(country => country.name.indexOf(searchValue) != -1)
  
    React.useEffect(() => {
      console.log('effect')
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          console.log('promise fulfilled')
          setCountries(response.data)
        })
    }, [])
    console.log('render', countries.length, 'persons')
  
    return (

      <View>
      <SearchForm searchValue={searchValue} handleSearch={handleSearch} />
      <Countries results={results}/>
      
  
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
            <Places />

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