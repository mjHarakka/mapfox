import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function AppHeader() {

return (
    <View>
        <StatusBar hidden = {true} />
        <View>
            <Text>W elcome to Mapfox</Text>
        </View>
        <View>
            <Button title="Test Button" />
            <Button title="Create a new adventure?" />
            <Button title="Seek a new adventure?" />
        </View>
    </View>
 
    );
}
