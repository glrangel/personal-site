import React from "react"
import {Box,Heading, Text} from "grommet"
import Layout from "../../components/layout"
import Header from "../../components/header"
import styles from "../index.module.css"
import PageTransition from 'gatsby-plugin-page-transitions';




export default () => (
    <Layout>
        <Header></Header>
        <Box fill className={styles.content} align="center" justify="center">
            <PageTransition>
                <Box align="start" justify="center">
                <Text>No o</Text>
                </Box>
            </PageTransition>
        </Box>
    </Layout>
)
