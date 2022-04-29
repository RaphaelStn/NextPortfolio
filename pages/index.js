import { Container, Box, Heading, Image, useColorModeValue, Button, Link } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/parapraph"
import { BioSection, BioYear } from "../components/Bio"
import Head from "next/head"


const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello I&apos;m a full-stack developer based in France.
            </Box>
            <Box display={{md:"flex"}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Raphaël Stacino
                    </Heading>
                </Box>
                <Box 
                flexShrink={0} 
                mt={{base:4, md:0}}
                ml={{md:6}}
                align="center"
                >
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2}
                    borderRadius="full"
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    src="/images/raphael.jpg"
                    alt="profile picture"/>
                </Box>
            </Box>
            <Section delay= {0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Raphaël is a french full-stack developer based near Paris. You can visit my portfolio to see my work, every source code is available free to use on my&nbsp;
                    <NextLink href="https://github.com/RaphaelStn" passHref><Link target="_blank">Github</Link></NextLink>. Working front-end with Javascript, React or Next, HTML and Sass, and back-end with PHP, MySql, NodeJS, Express, MongoDB.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="blue">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection><BioYear>1994</BioYear>Born in Enghiens-les-bains, France.</BioSection>
                <BioSection><BioYear>2013</BioYear>Obtained a Baccalauréat Scientifique.</BioSection>
                <BioSection><BioYear>2015</BioYear>Butcher 🥩 in various shops in Le Havre and Paris</BioSection>
                <BioSection><BioYear>2022</BioYear>Web Developer diploma obtained thanks to&nbsp; 
                    <NextLink href="https://openclassrooms.com/" passHref >
                        <Link target="_blank">
                            OpenClassroom
                        </Link>
                    </NextLink>
                    .
                </BioSection>
                <BioSection><BioYear>2022</BioYear>Independant Web Developer</BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥ 
                </Heading>
                <Paragraph>
                    Art, Music, Aquariums & Plants
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page