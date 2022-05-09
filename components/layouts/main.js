import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react' 
import Navbar from '../navbar'
import Voxel from '../voxel'
import NoSsr from '../no-ssr'
import Footer from '../footer'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width-device-width, initial-scale=1"/>
                <title>Raphaël Stacino</title>
                <link rel ="shortcut icon" href ="./images/logoImg.png" type="image/x-icon"/>
                <meta name="description" content="Raphaël Stacino - Web Developpment"></meta>
                <meta name="author" content="Raphaël Stacino"></meta>
                <meta name="google-site-verification" content="drbFzDQUNCD89Rvx8XxdkuyAaMmE9L1BuAmQOt9WhrY" />
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <Voxel/>
                </NoSsr>
                {children}
            </Container>
            <Footer/>
        </Box>
    )
}

export default Main