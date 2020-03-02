import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function AppHeader() {

return (
    <View>
        <StatusBar hidden = {true} />
        <View>
            <Text h1>Welcome to Mapfox</Text>
        </View>
        <View>
            <Button title="Create a new adventure?" />
            <Button title="Seek a new adventure?" />
        </View>
    </View>
 
    );
};

const styles = StyleSheet.create({
    title: {

    }
});
