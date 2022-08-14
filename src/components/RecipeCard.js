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
      <View style={styles.subContainer}>
        <Text style={styles.name}>{recipe.title}</Text>
        <Text>
          Serving: {recipe.servings} pers - Cooking: {recipe.readyInMinutes} min
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    width: 250,
  },
  subContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
    height: 'auto',
    minHeight: 100,
  },
  image: {
    height: 130,
    width: 250,
    // borderTopStartRadius: 4,
    // borderTopEndRadius: 4,
    // marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    fontSize: 16,
  },
});

export default RecipeCard;

//   Serving : {recipe.servings} pers
//   Cooking : {recipe.readyInMinutes} min
// {recipe.title}
//   uri: `https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}`,
