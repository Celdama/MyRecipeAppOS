import { useEffect, useState } from 'react';

import spoonacular from '../api/spoonacular';

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await spoonacular.get(`/random`);
      setRecipes(response.data.recipes);
      console.log('from fucking hook');
      console.log(response.data.recipes.length);
    } catch (err) {
      setErrorMessage(err);
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, recipes, errorMessage];
};
