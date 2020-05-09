import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors'

const TopAdventures = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>See which adventures are most popular!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: Colors.secondaryOrange,
        fontWeight: 'bold'
    }
});
export default TopAdventures;