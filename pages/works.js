import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react' 
import Section from '../components/section'
import Layout from "../components/layouts/article"
import { GridItem } from '../components/grid-item'
import webagency from '../public/images/siteshot/webagency.png'
import heroesloop from '../public/images/siteshot/heroes.png'
import spawnloop from '../public/images/siteshot/spawn.png'
import vscode from '../public/images/siteshot/vs.png'
import main from '../public/images/siteshot/main.png'
import lily from '../public/images/siteshot/lily.png'
import discordBot from '../public/images/siteshot/visuel-logo-discord.png'
const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                    Projets
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                    <GridItem href="https://github.com/RaphaelStn/DiscordBotMusic.netlify.app" title="DiscordBot" thumbnail={discordBot}> 
                        Un bot musical pour discord, utilisant node.js
                        </GridItem>
                        <GridItem href="https://lilysworkshop.netlify.app" title="Lily's Workshop" thumbnail={lily}> 
                        Site pour Wedding planer, fait à l'aide de Next.js - Tailwindcss
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem href="/" title="MyPortfolio" thumbnail={main}> 
                        Portfolio créé avec Next.js - ChakraUI - FramerMotion - Three.js pour l'animation voxel
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem href="https://vscode.raphael-stacino.fr" title="Vscode Portfolio" thumbnail={vscode}> 
                        Portfolio basé sur l'IDE Visual Studio Code. Crée à l'aide de Next.js - Tailwindcss
                        </GridItem>
                    </Section>
                    <Section delay={0.1}>
                        <GridItem href="https://webagency.raphael-stacino.fr" title="WebAgency" thumbnail={webagency}> 
                        Site statique en HTML - CSS
                        </GridItem>
                    </Section>
                </SimpleGrid>
                
                <Section delay={0.2}>
                    <Divider my={6} bg={useColorModeValue('grey', '')}/>
                    <Heading as="h3" fontSize={20} mb={4} variant="section-title">
                    Autres - Projets Perso
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6}>  
                    <Section delay={0.2}>
                        <GridItem href="https://heroes.raphael-stacino.fr" title="HeroesLoop" thumbnail={heroesloop}> 
                        Démo Javascript, mouvement basique au clavier, des collisions, et  avec gravité. Pas de support mobile pour l'instant
                        </GridItem>
                    </Section>
                    <Section delay={0.2}>
                        <GridItem href="https://spawn.raphael-stacino.fr" title="SpawnLoop" thumbnail={spawnloop}> 
                        Simple jeu Javascript
                        </GridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
