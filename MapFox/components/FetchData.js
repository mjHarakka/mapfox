import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { List,ListItem } from 'react-native-elements';
import MapScreen from '../screens/MapScreen';

const FetchData = (props) => {

    const [events, setEvents] = useState([{}]);
    
    //const eventlist = [
        //{name: 'Pasila Tour'},
        //{name: 'Sight spotting'}
    //]
    
    useEffect(() => 
      fetchAll(), []
    );

    const fetchAll = () => {
        fetch('http://128.199.36.67/events')
        .then((response) => response.json())
        .then((responseJson) => { 
            setEvents(responseJson);
            //console.log('Events array: ', events);
            //console.log('Event title:', events[0].title);
        })
        .catch((error) => { 
          Alert.alert('Error' , error); 
        });
      }
    
    return ( 
        <View>
            {
            events.map((l, i) => (
                <ListItem
                key={i}
                title={l.title}
                bottomDivider
                chevron
                //onPress = {() => {console.log('Pressed')}}
                onPress={() => {
                    props.navigation.navigate({ routeName: 'EventInfoScreen', 
                    //params: {
                        //marker: place
                    //}
                });
                }}
            />
    ))
}
        </View>
    );
};

export default FetchData;

