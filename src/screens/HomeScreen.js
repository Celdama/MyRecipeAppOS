import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import spoonacular from '../api/spoonacular';
import AppBar from '../components/AppBar';
import RecipesList from '../components/RecipesList';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const searchApi = async () => {
    try {
      const response = await spoonacular.get(`/random`);
      setRecipes(response.data.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  const filterRecipesByPrice = (priceOne, priceTwo) => {
    return recipes.filter((recipe) => {
      return (
        recipe.pricePerServing > priceOne && recipe.pricePerServing <= priceTwo
      );
    });
  };

  return (
    <>
      <AppBar title='MyRecipeApp' />
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
    </>
  );
};
// const styles = StyleSheet.create({});

export default HomeScreen;
