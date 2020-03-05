import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartScreen from '../screens/StartScreen';
import AdventureListScreen from '../screens/AdventureListScreen';
import MapScreen from '../screens/MapScreen';

const Navi= createStackNavigator({
    MainPage: StartScreen,
    AdventureList: AdventureListScreen,
    Map: MapScreen
});

export default createAppContainer(Navi);