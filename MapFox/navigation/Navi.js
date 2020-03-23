import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartScreen from '../screens/StartScreen';
import AdventureListScreen from '../screens/AdventureListScreen';
import MapScreen from '../screens/MapScreen';
import AdventureCreationForm from '../screens/AdventureCreationForm';
import PlainMap from '../screens/PlainMap';

const Navi= createStackNavigator({
    MainPage: StartScreen,
    AdventureList: AdventureListScreen,
    MapScreen: MapScreen,
    AdventureCreationForm: AdventureCreationForm,
    PlainMap: PlainMap
});

export default createAppContainer(Navi);