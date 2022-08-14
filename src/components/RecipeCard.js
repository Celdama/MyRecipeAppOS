import { Image, StyleSheet, Text, View } from 'react-native';

const RecipeCard = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}`,
        }}
      />
      <Text style={styles.name}>{recipe.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 130,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RecipeCard;

//   Serving : {recipe.servings} pers
//   Cooking : {recipe.readyInMinutes} min
// {recipe.title}
//   uri: `https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}`,
