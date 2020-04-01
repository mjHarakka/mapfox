import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import MapScreen from '../screens/MapScreen';

const FetchData = (props) => {

    const [events, setEvents] = useState([{}]);
    
    useEffect(() => 
      fetchAll(), []
    );

    const fetchAll = () => {
        fetch('http://128.199.36.67/events')
        .then((response) => response.json())
        .then((responseJson) => { 
            setEvents(responseJson);
            //console.log('Events array: ', events);
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

