import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

import HomeScreen from './src/screens/HomeScreen';
import RecipeShowScreen from './src/screens/RecipeShowScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Recipe Details' component={RecipeShowScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
