import { FlatList, StyleSheet, Text, View } from 'react-native';

import RecipeCard from './RecipeCard';

const RecipesList = ({ title, recipes }) => {
  return (
    <View>
      <Text>Recipes List</Text>
      <Text>{recipes.length}</Text>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => {
          return <RecipeCard recipe={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipesList;
