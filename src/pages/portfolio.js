import React from "react"
import {Box, Heading, Text} from "grommet"
import Portfolio from "../components/portfolio"
import {Helmet} from "react-helmet"



import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"


export default (props) => (
    <Layout>
        <Helmet>
            <title>Gabriel Rangel - Portfolio</title>
        </Helmet>
        <Header></Header>
        <Box fill className={styles.content}  align="center" justify="start">
          <Box className={styles.mobileHeading} align="center" justify="center">
              <Heading className={styles.text + ' '+ styles.textUnderline}>portfolio</Heading>
          </Box>
        <Portfolio></Portfolio>
        </Box>
    </Layout>
)
