import { AspectRatio, Box, Flex, Heading, HStack, Image, Stack, Text } from 'native-base';

const RecipeCard = ({ title, desc, prep, cooking, img }) => {
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
                uri: img,
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
          <Text fontWeight='400'>{desc}</Text>
          <HStack alignItems='center' space={4} justifyContent='space-between'>
            <Flex>
              <Text color='coolGray.600' fontWeight='400'>
                Prep : {prep} min
              </Text>
              <Text color='coolGray.600' fontWeight='400'>
                Cooking : {cooking} min
              </Text>
            </Flex>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default RecipeCard;
