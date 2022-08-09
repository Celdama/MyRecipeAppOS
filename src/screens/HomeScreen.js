import { Box, TextArea } from 'native-base';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <Box alignItems='center' w='100%'>
      <TextArea h={20} placeholder='Text Area Placeholder' w='75%' maxW='300' />
    </Box>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
