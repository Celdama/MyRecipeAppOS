import { FlatList } from 'react-native';

import AppBar from '../components/AppBar';
import RecipeCard from '../components/RecipeCard';

const HomeScreen = () => {
  const recipes = [
    {
      id: 0,
      title: 'Salade césar',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ut exercitationem laboriosam laborum, iusto ab, nulla',
      prep: 15,
      cooking: 2,
      img: '',
    },
    {
      id: 1,
      title: 'Salade césar',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ut exercitationem laboriosam laborum, iusto ab, nulla',
      prep: 15,
      cooking: 2,
      img: '',
    },
  ];

  return (
    <>
      <AppBar title='MyRecipeApp' />
      <FlatList
        keyExtractor={({ id }) => id}
        data={recipes}
        renderItem={({ item }) => {
          return <RecipeCard title={item.title} />;
        }}
      />
    </>
  );
};
// const styles = StyleSheet.create({});

export default HomeScreen;
