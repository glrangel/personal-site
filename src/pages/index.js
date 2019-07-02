import React from "react"
import {Box, Text, Heading} from "grommet"
import PageTransition from 'gatsby-plugin-page-transitions';


import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"



export default (props) => (
    <Layout>
        <Header></Header>
        <Box fill className={styles.content} align="center" justify="center">
                <Box align="start" justify="center">
                    <Heading level="1" className={styles.text+' '+styles.lineHeight}>Gabriel Rangel</Heading>
                    <Text size="large" className={styles.text+' '+styles.lineHeight} style={{color: 'orange'}} >Front End Web Developer</Text>
                </Box>
        </Box>
    </Layout>
)
