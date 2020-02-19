import React from "react"
import {Box,Heading, Text} from "grommet"
import Layout from "../../components/layout"
import Header from "../../components/header"
import styles from "../index.module.css"




export default () => (
    <Layout>
        <Header></Header>
        <Box fill className={styles.content} align="center" justify="center">
                <Box align="start" justify="center">
                <Text>Yo</Text>
                </Box>
        </Box>
    </Layout>
)
