import React from "react"
import {Box, Text, Heading} from "grommet"


import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"
import styled from "styled-components"

const MyHeading = styled(Heading)`
z-index: 1;
color:whitesmoke;
font-size: 40px;
text-align: center;
width: 100%;
line-height: 3px;
`;
const MyText = styled(Text)`
z-index: 1;
color:whitesmoke;
font-size: 40px;
text-align: center;
width: 100%;
line-height: 3px;
`;




export default (props) => (
    <Layout>
        <Header></Header>
        <Box fill className={styles.content} align="center" justify="center">
                <Box align="start" justify="center">
                    <MyHeading level="1">Gabriel Rangel</MyHeading>
                    <MyText size="large" style={{color: 'orange'}} >Front End Web Developer</MyText>
                </Box>
        </Box>
    </Layout>
)
// const test = {
//         zIndex: '1',
//         color: 'whitesmoke',
//         fontSize: '40px',
//         textAlign: 'center',
//         width: '100%',
//         lineHeight: '3px'
//
// }
//
// export default (props) => (
//     <Layout>
//         <Header></Header>
//         <Box fill className={styles.content} align="center" justify="center">
//                 <Box align="start" justify="center">
//                     <Heading level="1" style={test}>Gabriel Rangel</Heading>
//                     <Text size="xxlarge" style={test} color="orange !important">Front End Web Developer</Text>
//                 </Box>
//         </Box>
//     </Layout>
// )
