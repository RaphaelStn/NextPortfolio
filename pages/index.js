import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue, 
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
import indexPosts from "../public/locales/indexPosts.json"
import { useRouter } from "next/router"


const Page = () => {
    const { locale } = useRouter()
    console.log({locale})
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    {indexPosts.intro.filter(p => p.locale === locale).map((intros) => {
                           return intros.content
                    })} 
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
                {indexPosts.work.filter(p => p.locale === locale).map((works) => {
                    return (
                        <Section delay= {0.1}>
                                
                            <Heading as="h3" variant="section-title">
                                {works.title}
                            </Heading>
                            <Paragraph>
                                {works.content}
                            </Paragraph>
                            <Box align="center" my={4}>
                                <NextLink href="/works">
                                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="blue">
                                        My Portfolio
                                    </Button>
                                </NextLink>
                            </Box>
                        </Section>
                    )
                })} 
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1994</BioYear>
                        {indexPosts.bio.filter(p => p.locale === locale && p.title === '1994').map((bios) => {
                           return bios.content
                        })} 
                    </BioSection>
                    <BioSection>
                        <BioYear>2013</BioYear>
                        {indexPosts.bio.filter(p => p.locale === locale && p.title === '2013').map((bios) => {
                           return bios.content
                        })} 
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        {indexPosts.bio.filter(p => p.locale === locale && p.title === '2015').map((bios) => {
                           return bios.content
                        })} 
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        {indexPosts.bio.filter(p => p.locale === locale && p.title === '2022.1').map((bios) => {
                           return bios.content
                        })} 
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        {indexPosts.bio.filter(p => p.locale === locale && p.title === '2022.2').map((bios) => {
                           return bios.content
                        })} 
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥ 
                    </Heading>
                    <Paragraph>
                    {indexPosts.love.filter(p => p.locale === locale).map((loves) => {
                           return loves.content
                    })} 
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