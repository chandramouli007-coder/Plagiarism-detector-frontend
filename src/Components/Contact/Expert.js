import React from 'react'
import ProfileCard from '../Home/ProfileCard'
import { Text,Flex } from "@chakra-ui/react"

function Contact() {
  return (
    <>
      <Text fontSize="4xl" align="center" justify="center" m={10}>
        Contact Us
      </Text>
      <Flex align="center" justify="center" h="" gap={10} m={0} p={0} wrap="wrap">

          <ProfileCard  name="Chandra Mouli S" description="Developer" linkedin="https://www.linkedin.com/in/chandra-mouli-9522a81a5/" github="https://github.com/alok27a" email="mouliinindia2002@gmail.com" />

          <ProfileCard  name="Vignesh M" description="Developer" linkedin="https://www.linkedin.com/in/vignesh-m-6039351b2/" github="https://github.com/sagefell29" email="vigabi2002@gmail.com" />
        {/* <HStack gap={20} >
        </HStack> */}
      </Flex>
    </>
  )
}

export default Contact