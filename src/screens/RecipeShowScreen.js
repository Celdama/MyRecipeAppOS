import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import spoonacular from '../api/spoonacular';

const RecipeShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [recipe, setRecipe] = useState(null);

  const getResult = async (id) => {
    try {
      const response = await spoonacular.get(`/${id}/information`);
      setRecipe(response.data);
    } catch (err) {
      console.log('Something went wrong, reload App');
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);
  return (
    <View style={styles.container}>
      {recipe ? (
        <Image
          style={styles.image}
          source={{
            uri: `https://spoonacular.com/recipeImages/${id}-636x393.${recipe.imageType}`,
          }}
        />
      ) : null}
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
  },
  image: {
    width: '100%',
    height: 260,
  },
});

export default RecipeShowScreen;
