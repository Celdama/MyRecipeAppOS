import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import RecipeShowScreen from './src/screens/RecipeShowScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    RecipeShow: RecipeShowScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Home',
    },
  }
);

export default createAppContainer(navigator);
