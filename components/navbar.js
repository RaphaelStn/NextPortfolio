import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import LocaleToggleButton from './locale-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { useRouter } from 'next/router'
import navPosts from '../public/locales/navPosts.json'



const LinkItem = ({ href, path, target, children, ...props}) => {
    const active = path == href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    const activeBg = useColorModeValue('#3182CE', '#90CDF4')
    const activeColor = useColorModeValue('whiteAlpha.900', 'gray.800')
    return ( 
        <NextLink href= {href} passHref>
            <Link 
                p={2}
                bg={active ? activeBg : undefined}
                color={active ? activeColor : inactiveColor}
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const {locale} = useRouter()
    return (
        <Box
        position= "fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{ backdropFilter:'blur(10px' }}
        zIndex={1}
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW = "container.md"
            wrap="wrap"
            align="center"
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
                
                <Stack
                direction={{base:'column', md:'row'}}
                display={{base:'none', md:'flex'}}
                width={{base:'full', md:'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/works" path={path} locale={locale}>
                        {navPosts.Works.filter(p => p.locale === locale).map((works) => {
                            return works.content
                        })} 
                    </LinkItem>
                    <LinkItem
                    target="_blank"
                    href="https://github.com/RaphaelStn/NextPortfolio"
                    display="inline-flex"
                    alignItems="center"
                    style={{ gap: 4 }}
                    pl={2}
                    >
                        <IoLogoGithub/>
                        {navPosts.Source.filter(p => p.locale === locale).map((sources) => {
                                            return sources.content
                                        })} 
                    </LinkItem> 
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton/>
                    <LocaleToggleButton/>
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options"/>
                            <MenuList>
                                <NextLink href="/" passHref locale={locale}>
                                    <MenuItem as={Link}>
                                        {navPosts.Home.filter(p => p.locale === locale).map((homes) => {
                                            return homes.content
                                        })} 
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref locale={locale}>
                                    <MenuItem as={Link}>                        
                                        {navPosts.Works.filter(p => p.locale === locale).map((works) => {
                                            return works.content
                                        })} 
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="https://github.com/RaphaelStn/NextPortfolio" passHref target="_blank">
                                    <MenuItem as={Link}> <IoLogoGithub/>
                                        {navPosts.Source.filter(p => p.locale === locale).map((sources) => {
                                            return sources.content
                                        })} 
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar