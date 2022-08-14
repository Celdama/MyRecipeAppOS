import { useEffect, useState } from 'react';

import spoonacular from '../api/spoonacular';
import AppBar from '../components/AppBar';
import RecipesList from '../components/RecipesList';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  // const recipes = [
  //   {
  //     id: 0,
  //     title: 'Salade césar',
  //     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ut exercitationem laboriosam laborum, iusto ab, nulla',
  //     prep: 15,
  //     cooking: 2,
  //     img: 'https://experience-fresh.panasonic.eu/wp-content/uploads/2020/10/Recette-salade-cesar_enjoy-banner.jpg',
  //   },
  //   {
  //     id: 1,
  //     title: 'Pâte à crêpes',
  //     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ut exercitationem laboriosam laborum, iusto ab, nulla',
  //     prep: 10,
  //     cooking: 10,
  //     img: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //   },
  // ];
  // console.log('props.environment: ', props.apiKey);
  const searchApi = async () => {
    try {
      const response = await spoonacular.get(`/random`);
      setRecipes(response.data.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log('recipe 0', results[0].title);
  recipes.map((recipe) => {
    console.log(recipe.pricePerServing);
  });

  useEffect(() => {
    searchApi();
  }, []);

  return (
    <>
      <AppBar title='MyRecipeApp' />
      <RecipesList recipes={recipes} title='per price' />
    </>
  );
};
// const styles = StyleSheet.create({});

export default HomeScreen;
