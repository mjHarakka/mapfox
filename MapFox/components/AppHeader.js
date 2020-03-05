import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

const AppHeader = () => {

return (
    <View style={styles.container}>
        <StatusBar hidden = {true} />
        <View>
            <Text style={styles.titleText}>Welcome to Mapfox</Text>
        </View>
        <View>
        {/* <Button title="Seek a new adventure?" onPress={() => {
                props.navigation.navigate('AdventureList');
            }} /> */}
            <Button title="Create a new adventure?" disabled/>
        </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30,
        color: 'darkblue',
        fontWeight: 'bold'
    }
});
export default AppHeader;