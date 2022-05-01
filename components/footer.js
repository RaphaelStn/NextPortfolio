import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Raphaël Stacino. Powered by Next.js / ChakraIU / FramerMotion.
    </Box>
  )
}

export default Footer