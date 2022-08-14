import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import spoonacular from '../api/spoonacular';

const RecipeShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await spoonacular.get(`/${id}/information`);
    console.log(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipeShowScreen;
