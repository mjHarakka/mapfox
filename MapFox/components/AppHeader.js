import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function AppHeader() {

return (
    <View>
        <View>
            <Text>Welcome to Mapfox</Text>
        </View>
        <View>
            <Button title="Create a new adventure?" />
            <Button title="Seek a new adventure?" />
        </View>
    </View>
 
    );
}
