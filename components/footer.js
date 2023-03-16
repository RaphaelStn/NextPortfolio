import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" marginTop="auto">
      &copy; {new Date().getFullYear()} Raphaël Stacino - Powered by Next.js
    </Box>
  )
}

export default Footer