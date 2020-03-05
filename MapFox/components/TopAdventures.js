import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TopAdventures = () => {
    return (
        <View>
            <Text style={styles.text}>Top adventures - see which are most popular!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: 'darkblue',
        fontWeight: 'bold'
    }
});
export default TopAdventures;