import { FlatList, StyleSheet, Text, View } from 'react-native';

const RecipesList = ({ title, recipes }) => {
  return (
    <View>
      <Text>Recipes List</Text>
      <Text>{recipes.length}</Text>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipesList;
