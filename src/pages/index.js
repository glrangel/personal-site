import React, { Component } from "react"
import {Box, Text, Heading} from "grommet"
import {Helmet} from "react-helmet"

// import {connect} from "../api/index.js"


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
line-height: 1;
`;
const MyText = styled(Text)`
z-index: 1;
color:whitesmoke;
font-size: 40px;
text-align: center;
width: 100%;
line-height: 1;
`;

class App extends Component{
  // constructor(props) {
  //   super(props);
  //   // call our connect function and define
  //   // an anonymous callback function that
  //   // simply console.log's the received
  //   // message
  //   connect(message => {
  //     console.log(message);
  //   });
  // }
  render(props){
    return(
      <Layout>
          <Helmet>
              <title>Gabriel Rangel - Home</title>
          </Helmet>
          <Header></Header>
          <Box fill className={styles.content} align="center" justify="center">
                  <Box align="start" justify="center">
                      <MyText size="large" style={{fontWeight: 'bold'}}>Gabriel Rangel</MyText>
                      <MyText size="large" style={{color: 'orange'}} >full stack developer</MyText>
                  </Box>
          </Box>
      </Layout>
    )
  }
}

export default App;
