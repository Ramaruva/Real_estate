import Image from 'next/image'
import styles from './page.module.css'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
const Banner=()=>{
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imgeUrl} width={500} height={300} alt='banner'/>
    <Box p="5"> 
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3x1" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">{desc1}</Text>
      <Button fontSize="x1" bg="blue.300" color="white">
         <Link></Link>
         <Image/>
      </Button>
    </Box>
  </Flex>
}
export default function Home() {
  return (
    <main className={styles.main}>
     pranita
    </main>
  )
}
