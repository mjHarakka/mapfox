import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { List,ListItem } from 'react-native-elements';
import MapScreen from '../screens/MapScreen';

const FetchData = (props) => {
    
    const eventlist = [
        {name: 'Pasila Tour'},
        {name: 'Sight spotting'}
    ]
    
    return ( 
        <View>
            {
                eventlist.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.name}
                        bottomDivider
                        chevron
                        onPress={() => props.navigation.navigate('MapScreen')}
                    />
                ))
            }
        </View>
    );
};

export default FetchData;

