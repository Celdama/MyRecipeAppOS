import { AspectRatio, Box, Flex, Heading, HStack, Image, Stack, Text } from 'native-base';

const RecipeCard = ({ title }) => {
  return (
    <Box alignItems='center' style={{ marginTop: 14 }}>
      <Box
        maxW='80'
        rounded='lg'
        overflow='hidden'
        borderColor='coolGray.200'
        borderWidth='1'
      >
        <Box>
          <AspectRatio w='100%' ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt='image'
            />
          </AspectRatio>
        </Box>
        <Stack p='4' space={4}>
          <Stack space={2}>
            <Heading size='md' ml='-1'>
              {title}
            </Heading>
          </Stack>
          <Text fontWeight='400'>
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems='center' space={4} justifyContent='space-between'>
            <Flex>
              <Text
                color='coolGray.600'
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight='400'
              >
                6 mins ago
              </Text>
              <Text
                color='coolGray.600'
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight='400'
              >
                6 mins ago
              </Text>
            </Flex>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default RecipeCard;
