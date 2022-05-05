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
import main from '../public/images/siteshot/main.jpeg'
import workPosts from '../public/locales/workPosts.json'
import { useRouter } from "next/router"

const Works = () => {
    const { locale } = useRouter()
    console.log({locale})
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    {workPosts.title.filter(p => p.locale === locale).map((title) => {
                        return title.content
                    })} 
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                        <GridItem href="/" title="MyPortfolio" thumbnail={main}> 
                            {workPosts.MyPortfolio.filter(p => p.locale === locale).map((MyPortfolio) => {
                                return MyPortfolio.content
                            })} 
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem href="https://vscode.raphael-stacino.fr/?" title="Vscode Portfolio" thumbnail={vscode}> 
                            {workPosts.Vscode.filter(p => p.locale === locale).map((vscode) => {
                                return vscode.content
                            })} 
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem href="https://whattodo.raphael-stacino.fr/?" title="WhatToDo" thumbnail={whattodo}> 
                            {workPosts.Whattodo.filter(p => p.locale === locale).map((whattodo) => {
                                return whattodo.content
                            })} 
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem href="https://ireki.raphael-stacino.fr/?" title="Ireki" thumbnail={ireki}> 
                            {workPosts.Ireki.filter(p => p.locale === locale).map((ireki) => {
                                return ireki.content
                            })} 
                        </GridItem>
                    </Section>
                    <Section delay={0.1}>
                        <GridItem href="https://webagency.raphael-stacino.fr/?" title="WebAgency" thumbnail={webagency}> 
                            {workPosts.Webagency.filter(p => p.locale === locale).map((webagency) => {
                                return webagency.content
                            })} 
                        </GridItem>
                    </Section>
                </SimpleGrid>
                
                <Section delay={0.2}>
                    <Divider my={6} bg={useColorModeValue('grey', '')}/>
                    <Heading as="h3" fontSize={20} mb={4}>
                        {workPosts.ptitle.filter(p => p.locale === locale).map((ptitle) => {
                            return ptitle.content
                        })} 
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6}>  
                    <Section delay={0.2}>
                        <GridItem href="https://heroesloop.raphael-stacino.fr/?" title="HeroesLoop" thumbnail={heroesloop}> 
                            {workPosts.Heroesloop.filter(p => p.locale === locale).map((heroesloop) => {
                                return heroesloop.content
                            })} 
                        </GridItem>
                    </Section>
                    <Section delay={0.2}>
                        <GridItem href="https://spawnloop.raphael-stacino.fr/?" title="SpawnLoop" thumbnail={spawnloop}> 
                            {workPosts.Spawnloop.filter(p => p.locale === locale).map((spawnloop) => {
                                return spawnloop.content
                            })} 
                        </GridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
