import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { colors } from 'react-native-elements';
import Colors from '../constants/Colors';

const AppHeader = props => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonArea}>
                <Button color={Colors.secondaryOrange} title="Create an adventure?" onPress={() => {
                    props.navigation.navigate('AdventureCreationForm');
                }} />
                <Button color={Colors.secondaryOrange} title="Seek a new adventure?" onPress={() => {
                    props.navigation.navigate('AdventureList');
                }} />
            </View>
        </View>
    );
};
AppHeader.navigationOptions = {
    headerTitle: 'Welcome to MapFox'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondaryBlue,
    },
    buttonArea: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
});
export default AppHeader;