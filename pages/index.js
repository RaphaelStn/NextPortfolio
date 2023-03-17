import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    Button, 
    Link, 
    List, 
    ListItem, 
    Icon 
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/parapraph"
import { BioSection, BioYear } from "../components/bio"
import { IoLogoLinkedin, IoMail, IoLogoGithub} from 'react-icons/io5'
import Typewriter from 'typewriter-effect';



const Page = () => {
    return (
        <Layout>
            <Container>
                <Box display={{md:"flex"}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            <Typewriter 
                                onInit={(typewriter) => {
                                    typewriter.typeString('Raphaël Stacino')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString('Développeur Web')
                                    .pauseFor(75000)
                                    .start()
                                }}
                                options={{
                                    loop: true
                                }}
                            />
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
                        src="/images/Raphael.png"
                        alt="profile picture"/>
                    </Box>
                </Box>
                        <Section delay= {0.1}>
                                
                            <Heading as="h3" variant="section-title">
                            À propos
                            </Heading>
                            <Paragraph>
                            Développeur Fullstack situé près de Paris, vous pouvez visiter mon portfolio pour retrouver mes projets, chaque code source est disponible gratuitement sur GitHub.
                            </Paragraph>
                            <Box align="center" my={4}>
                                <NextLink href="/works">
                                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="blue">
                                        Portfolio
                                    </Button>
                                </NextLink>
                            </Box>
                        </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1994</BioYear>
                        Né à Enghien-Les-Bains, France
                    </BioSection>
                    <BioSection>
                        <BioYear>2013</BioYear>
                        Obtient le Baccalauréat Scientifique.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Boucher 🥩 dans différentes boutiques au Havre et à Paris.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Diplôme de développeur Web obtenu grâce à OpenClassrooms.
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥ 
                    </Heading>
                    <Paragraph>
                        Échec, Art, Musique, Jeux, Aquariums & Plantes
                    </Paragraph>
                </Section>
                <Heading as="h3" variant="section-title">
                    Contacts
                </Heading>

                <Section>
                    <List>
                    <ListItem>
                            <Link href="mailto:raphaelstacino@gmail.com">
                                <Button
                                variant="ghost"
                                colorScheme="blue"
                                leftIcon={<Icon as ={IoMail} />}
                                >
                                    raphaelstacino@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/RaphaelStn" target="_blank">
                                <Button
                                variant="ghost"
                                colorScheme="blue"
                                leftIcon={<Icon as ={IoLogoGithub} />}
                                >
                                    @raphaelstn
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/raphaël-stacino-b0b814194/" target="_blank">
                                <Button
                                variant="ghost"
                                colorScheme="blue"
                                leftIcon={<Icon as ={IoLogoLinkedin} />}
                                >
                                    Raphaël Stacino
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page