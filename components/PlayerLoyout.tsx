import React from 'react'
import {
  Box,
  List,
  ListIcon,
  ListItem,
  Divider,
  Center,
  Link,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/layout"

import Sidebar from './Sidebar'

const PlayerLoyout = ({children}) => {
  return (
    <Box width="100vw" height="100vh">
       <Box position="absolute" top="0" width="250px" left="0">
         <Sidebar />
       </Box>
       <Box width="250px" marginBottom="100px">
        {children}
        <Box position="absolute" left="0" bottom="0"></Box>
       </Box>
    </Box>
  )
}

export default PlayerLoyout