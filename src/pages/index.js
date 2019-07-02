import React from "react"
import {Box, Text, Heading} from "grommet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PageTransition from 'gatsby-plugin-page-transitions';


import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"



export default (props) => (
    <Layout>
        <Header></Header>
        <Box fill className={styles.content} align="center" justify="center">
            <PageTransition>
                <Box align="start" justify="center">
                    <Heading level="1" className={styles.text+' '+styles.lineHeight}>Gabriel Rangel</Heading>
                    <Text size="large" className={styles.text+' '+styles.lineHeight} style={{color: 'orange'}} >Front End Web Developer</Text>
                </Box>
            </PageTransition>
        </Box>
        {console.log(props.data.imageOne.childImageSharp)}
    </Layout>
)
// <Img className={styles.image} fixed={props.data.imageOne.childImageSharp.fixed}/>

export const pageQuery = graphql`
  query {
    imageOne:
    file(relativePath: { eq: "IslandOfTheDead.jpg" }) {
      childImageSharp {
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
