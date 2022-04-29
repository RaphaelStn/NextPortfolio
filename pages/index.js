import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} align="center" color="white">
                Hello I&apos;m a full-stack developper based in France.
            </Box>
            <Box display={{md:"flex"}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Raphaël Stacino
                    </Heading>
                </Box>
            </Box>
        </Container>
    )
}

export default Page