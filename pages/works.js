import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react' 
import Section from '../components/section'
import Layout from "../components/layouts/article"
import { GridItem } from '../components/grid-item'
import whattodo from '../public/images/siteshot/whattodo.jpeg'
import ireki from '../public/images/siteshot/wordpress.jpeg'
import webagency from '../public/images/siteshot/webagency.jpeg'
import heroesloop from '../public/images/siteshot/heroesloop.jpeg'
import spawnloop from '../public/images/siteshot/spawnloop.jpeg'
import vscode from '../public/images/siteshot/vscode.jpeg'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                        <GridItem href="https://vscode.raphael-stacino.fr/?" title="Vscode Portfolio" thumbnail={vscode}> 
                            Portfolio based on the IDE Visual Studio Code. Made with PHP, Twig and Sass
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem href="https://whattodo.raphael-stacino.fr/?" title="WhatToDo" thumbnail={whattodo}> 
                            Simple website to help see and choose between popular recent movies/shows. Made with PHP, Twig and Sass
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem href="https://ireki.raphael-stacino.fr/?" title="Ireki" thumbnail={ireki}> 
                            Wordpress based website.
                        </GridItem>
                    </Section>
                    <Section delay={0.1}>
                        <GridItem href="https://webagency.raphael-stacino.fr/?" title="WebAgency" thumbnail={webagency}> 
                            Template website for html/css work, my first project.
                        </GridItem>
                    </Section>
                </SimpleGrid>
                
                <Section delay={0.2}>
                    <Divider my={6} bg={useColorModeValue('grey', '')}/>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Personnal Projects
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6}>  
                    <Section delay={0.2}>
                        <GridItem href="https://heroesloop.raphael-stacino.fr/?" title="HeroesLoop" thumbnail={heroesloop}> 
                            A Javascript demo for basic movement with keyboard, collision system, and gravity.
                        </GridItem>
                    </Section>
                    <Section delay={0.2}>
                        <GridItem href="https://spawnloop.raphael-stacino.fr/?" title="SpawnLoop" thumbnail={spawnloop}> 
                            A simple game with Javascript.
                        </GridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
