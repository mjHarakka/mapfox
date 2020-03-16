import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { List,ListItem } from 'react-native-elements';
import MapScreen from '../screens/MapScreen';

const FetchData = (props) => {

    const [place, setPlace] = useState({});
    
    const eventlist = [
        {name: 'Pasila Tour'},
        {name: 'Sight spotting'}
    ]
    
    useEffect(() => 
      fetchAll(),
    []);

    const fetchAll = () => {
        fetch('http://128.199.36.67/api/apidata')
        .then((response) => response.json())
        .then((responseJson) => { 
            //console.log(responseJson.data[0].id);
            setPlace({
                id: responseJson.data[0].id, 
                name: responseJson.data[0].name.fi,
                latitude: responseJson.data[0].location.lat,
                longitude: responseJson.data[0].location.lon
            });
            console.log('Place object: ', place);
        })
        .catch((error) => { 
          Alert.alert('Error' , error); 
        });
      }
    
    return ( 
        <View>
            {
                eventlist.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.name}
                        bottomDivider
                        chevron
                        //onPress = {() => {console.log('Pressed')}}
                        onPress={() => {
                            props.navigation.navigate({ routeName: 'MapScreen', 
                            params: {
                                marker: place
                            }
                        });
                        }}
                    />
                ))
            }
        </View>
    );
};

export default FetchData;

