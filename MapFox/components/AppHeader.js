import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

const AppHeader = () => {

return (
    <View style={styles.container}>
        
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