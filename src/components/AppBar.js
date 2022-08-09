import { MaterialIcons } from '@expo/vector-icons';
import { HStack, Icon, IconButton, StatusBar, Text } from 'native-base';

const AppBar = ({ title }) => {
  return (
    <>
      <StatusBar bg='#1f2937' barStyle='light-content' />
      <HStack
        bg='#1f2937'
        px='1'
        py='4'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        <HStack alignItems='center'>
          <IconButton
            icon={
              <Icon size='sm' as={MaterialIcons} name='menu' color='white' />
            }
          />
          <Text color='white' fontSize='20' fontWeight='bold'>
            {title}
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon as={MaterialIcons} name='search' size='sm' color='white' />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name='more-vert'
                size='sm'
                color='white'
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
};

export default AppBar;
