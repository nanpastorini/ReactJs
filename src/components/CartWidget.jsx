import React from 'react'
import { Button, ButtonGroup, Box, Flex } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Box as='button' borderRadius='md' bg='orange.400' color='white' px={4} h={8} mr={4} ml={4}>
        🛒 5
      </Box>
      <ButtonGroup spacing={4}>
        <Button colorScheme='gray' variant='outline'>
          Login
        </Button>
        <Button colorScheme='gray'>Sign Up</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default CartWidget