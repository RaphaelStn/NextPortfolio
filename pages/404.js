import NextLink from 'next/link'
import {
    Box, 
    Heading,
    Container,
    Divider,
    Button,
    Text
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1"  align="center">Not Found</Heading>
            <Text  align="center">This page doesn't exist</Text>
            <Divider my={6}/>
            <Box my={6} align="center">
                <NextLink href='/'>
                    <Button colorScheme="blue">Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound