import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image 
            src={thumbnail} 
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"/>
            <LinkOverlay href={href} target="_blank">
                <Text fontSize={20} mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}> {children} </Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global 
    styles={`
    .grid-item-thumbnail {
        border: 1px solid !important; 
        border-color: rgba(81, 81, 81, 0.2) !important;
        border-radius:12px;
    }
    `}/>
)