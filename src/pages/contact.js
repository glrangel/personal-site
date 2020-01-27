import React from "react"
import {Box,Heading, Text} from "grommet"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"
import {Helmet} from "react-helmet"





export default () => (
    <Layout>
        <Helmet>
            <title>Gabriel Rangel - Contact</title>
        </Helmet>
        <Header></Header>
        <Box fill className={styles.content} align="center" justify="center">
                <Box align="start" justify="center">
                    <Box level="1" style={{marginBottom: '5vh'}}className={styles.text+' '+styles.header}>
                        <span className={styles.textUnderline}>contact</span>
                    </Box>
                    <Box level="2" className={styles.text}>
                        <span className={styles.textUnderline}>email:</span>
                        <a href="mailto: glrangel25@gmail.com" style={{wordBreak: 'break-all'}}
                            className={styles.textColor}> glrangel25@gmail.com</a>
                    </Box>
                    <Box className={styles.text}>
                        <span className={styles.textUnderline}>github:</span>
                        <a href="https://github.com/glrangel" target="_blank" className={styles.textColor}> glrangel</a>
                    </Box>
                </Box>
        </Box>
    </Layout>
)
