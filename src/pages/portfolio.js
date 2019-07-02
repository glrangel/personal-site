import React from "react"
import {Box, Heading, Text} from "grommet"
import Portfolio from "../components/portfolio"


import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"


export default (props) => (
    <Layout>
        <Header></Header>
        <Box fill className={styles.content}  align="center" justify="start">
                <Box style={{marginTop: '10vh'}}align="center" justify="center">
                    <Heading className={styles.text + ' '+ styles.textUnderline + ' ' + styles.marginTop}>portfolio</Heading>
                </Box>
                <Portfolio></Portfolio>
        </Box>
    </Layout>
)
