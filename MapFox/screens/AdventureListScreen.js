import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import FetchData from '../components/FetchData';

const AdventureListScreen = (props) => {


  return (
    <View>
      <ScrollView>
        <FetchData navigation={props.navigation} />
      </ScrollView>
    </View >
  );
};
AdventureListScreen.navigationOptions = {
  headerTitle: 'Adventure list'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AdventureListScreen;