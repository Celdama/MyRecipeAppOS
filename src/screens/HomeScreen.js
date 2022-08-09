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
      img: 'https://experience-fresh.panasonic.eu/wp-content/uploads/2020/10/Recette-salade-cesar_enjoy-banner.jpg',
    },
    {
      id: 1,
      title: 'Pâte à crêpes',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ut exercitationem laboriosam laborum, iusto ab, nulla',
      prep: 10,
      cooking: 10,
      img: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <>
      <AppBar title='MyRecipeApp' />
      <FlatList
        keyExtractor={({ id }) => id}
        data={recipes}
        renderItem={({ item }) => {
          const { title, desc, prep, cooking, img } = item;
          return (
            <RecipeCard
              title={title}
              desc={desc}
              prep={prep}
              cooking={cooking}
              img={img}
            />
          );
        }}
      />
    </>
  );
};
// const styles = StyleSheet.create({});

export default HomeScreen;
