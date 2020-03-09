import React from 'react';
import {StyleSheet, View, Text, TextInput } from 'react-native';


const AdventureCreationForm=()=> {

    const [value, onChangeText] = React.useState('MyAdventure')


    return (
        <View style={styles.container}>
            <Text>Create an adventure here</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
        </View>
    );
};
AdventureCreationForm.navigationOptions= {
    headerTitle: 'My adventures'
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
export default AdventureCreationForm;