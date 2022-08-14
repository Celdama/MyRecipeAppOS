import { StyleSheet, Text, View } from 'react-native';

const RecipesList = ({ title, recipes }) => {
  return (
    <View>
      <Text>Recipes List</Text>
      <Text>{recipes.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipesList;
