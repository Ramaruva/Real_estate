import Image from 'next/image'
import styles from './page.module.css'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { baseUrl, fetchApi } from '@/utils/fetchApi'
const Banner=({purpose,title1,title2,linkName,buttonText,desc1,desc2,imgeUrl})=>{
  return(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imgeUrl} width={500} height={300} alt='banner'/>
    <Box p="5"> 
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3x1" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">{desc1}<br />{desc2}</Text>
      <Button >
         <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
  )
}
export default function Home({propertyForSale,propertyForRent}) {
  console.log(propertyForRent,propertyForSale);
  return (
    <Box>
      <Banner 
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imgeUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap="wrap">
           {/* fetch the properties and map over them */}
      </Flex>
      <Banner 
      purpose="BUY A HOME"
      title1="Find, Buy & Own your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-rent"
      imgeUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
    </Box>
  )
}

export async function getStaticProps(){
  const propertyForSale =  await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent =  await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  return {
    props:{
      propertyForSale:propertyForSale?.hits,
      propertyForRent:propertyForRent?.hits
    }
  };
}
