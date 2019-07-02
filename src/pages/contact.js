import React from "react"
import {Box,Heading, Text} from "grommet"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"
import PageTransition from 'gatsby-plugin-page-transitions';




export default () => (
    <Layout>
        <Header></Header>
        <Box fill className={styles.content} align="center" justify="center">
            <PageTransition>
                <Box align="start" justify="center">
                    <Box level="1" className={styles.text+' '+styles.header}>
                        <span className={styles.textUnderline}>contact</span>
                    </Box>
                    <Box level="2" className={styles.text}>
                        <span className={styles.textUnderline}>email:</span>
                        <a href="mailto: glrangel25@gmail.com" className={styles.textColor}> glrangel25@gmail.com</a>
                    </Box>
                    <Box className={styles.text}>
                        <span className={styles.textUnderline}>gitlab:</span>
                        <a href="https://gitlab.com/glrangel" target="_blank" className={styles.textColor}> glrangel</a>
                    </Box>
                </Box>
            </PageTransition>
        </Box>
    </Layout>
)
