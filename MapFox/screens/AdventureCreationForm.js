import React from 'react';
import {Text, View, TextInput } from 'react-native';


const AdventureCreationForm=()=> {

    const [value, onChangeText] = React.useState('MyAdventure')



    return(
        <View>
            <Text>Create an adventure here</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
            
        </View>
    )
    
}

export default AdventureCreationForm;