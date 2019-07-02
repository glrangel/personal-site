import React from "react"
import {Box, Heading, Text} from "grommet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PageTransition from 'gatsby-plugin-page-transitions';
import Portfolio from "../components/portfolio"


import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"


export default (props) => (
    <Layout>
        <Header></Header>
        <Box fill className={styles.content} align="center" justify="start">
            <PageTransition>
                <Box align="center" justify="center">
                    <Heading className={styles.text + ' '+ styles.textUnderline + ' ' + styles.marginTop}>portfolio</Heading>
                </Box>
                <Portfolio></Portfolio>
            </PageTransition>
        </Box>
    </Layout>
)
// <Img className={styles.image} fluid={props.data.imageOne.childImageSharp.fluid}/>

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "IslandOfTheDead.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
