import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AppHeader() {

return (
    <View>
        <View>
            <Text>Welcome to Mapfox</Text>
        </View>
        <View style={styles.buttonArea}>
            <Button title="Create a new adventure?" />
            <Button title="Seek a new adventure?" />
        </View>

    </View>
 
    );
}
const styles= StyleSheet.create({
    buttonArea: {
        flexDirection: 'row'
    }
})