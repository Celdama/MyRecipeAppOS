import { ScrollView, StyleSheet, Text, View } from 'react-native';

import RecipesList from '../components/RecipesList';
import useRecipe from '../hooks/useRecipe';

const HomeScreen = () => {
  const [searchApi, recipes, errorMessage] = useRecipe();

  const filterRecipesByPrice = (priceOne, priceTwo) => {
    return recipes.filter((recipe) => {
      return (
        recipe.pricePerServing > priceOne && recipe.pricePerServing <= priceTwo
      );
    });
  };

  return (
    <View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RecipesList
          recipes={filterRecipesByPrice(0, 200)}
          title='Cost Effective'
        />
        <RecipesList
          recipes={filterRecipesByPrice(200, 400)}
          title='Bit Price'
        />
        <RecipesList
          recipes={filterRecipesByPrice(400, 2000)}
          title='Big Spender'
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
