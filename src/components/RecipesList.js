import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import RecipeCard from './RecipeCard';

const RecipesList = ({ title, recipes }) => {
  recipes.map((recipe) => {
    console.log(recipe.pricePerServing);
  });
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <RecipeCard recipe={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipesList;
