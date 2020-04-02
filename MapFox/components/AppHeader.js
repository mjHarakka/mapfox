import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const AppHeader = props => {

return (
    <View style={styles.container}>
        {console.log(props)}
        <Text>Welcome to MapFox</Text>
        <Button title="Create an adventure?" onPress={() => {
            props.navigation.navigate('AdventureCreationForm');
        }} />
        <Button title="Seek a new adventure?" onPress={() => {
            props.navigation.navigate('AdventureList');
        }} />
    </View>
    );
};
AppHeader.navigationOptions= {
    headerTitle: 'Welcome to MapFox'
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    }
});
export default AppHeader;