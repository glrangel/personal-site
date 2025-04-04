import React from "react"
import { Link } from "gatsby"
import {Box, Text} from "grommet"
import styles from "./layout.module.css"
import styled from "styled-components"

const MyBox = styled(Box)`
/* height: 1em; */
margin-top: 5px;
margin-bottom: 5px;
padding: 2em;
background-color: #eeeceb;
box-shadow: 0 8px 6px -8px black;    /* position: fixed; */
z-index: 1;
text-align: center;
word-break: break-word;
width: 100%;

-webkit-transition: background-color 1s;
-moz-transition: background-color 1s;
-o-transition: background-color 1s;
transition: background-color 1s;
`;
const myLink = {
    textDecoration: 'none',
    color: '#443e3c',
    fontSize: '18px',
    padding: '10px',
    justifyContent: 'center',
    flex: '1',
    display: 'flex'
}

export default () => (
    <Box style={{display: 'flex', flexWrap: 'wrap', maxWidth: '1200px'}} direction="row" align="center" justify="center" width="80%">
        <Box className={styles.mobile} >
            <a style={myLink} href="https://objective-murdock-47b204.netlify.app" target="_blank">
                <MyBox className={styles.hover} align="center" justify="center" >
                    <Text weight="bold" size="xlarge">Demo 3D WIP</Text>
                    <Text>Demo 3D website made using react three</Text>
                </MyBox>
            </a>
        </Box>
        <Box className={styles.mobile} >
            <a style={myLink} href="https://competent-dijkstra-7a8fca.netlify.app/" target="_blank">
                <MyBox className={styles.hover} align="center" justify="center" >
                    <Text weight="bold" size="xlarge">Responsive Coding Challenge</Text>
                    <Text align="center">Fully responsive pure HTML/CSS page</Text>
                </MyBox>
            </a>
            <a style={myLink} href="https://www.witchesandscience.com/" target="_blank">
                <MyBox className={styles.hover} align="center" justify="center" >
                    <Text weight="bold" size="xlarge">Witches & Science</Text>
                    <Text align="center">Interactive landing page made using HTML/CSS/JavsScript</Text>
                </MyBox>
            </a>
            <Link style={myLink} to="/">
                <MyBox className={styles.hover} align="center" justify="center" >
                    <Text weight="bold" size="xlarge">Personal Website</Text>
                    <Text>Made using GatsbyJS</Text>
                </MyBox>
            </Link>
        </Box>
    </Box>


)

// import React from "react"
// import { Link } from "gatsby"
// import {Box, Text} from "grommet"
// import styles from "./layout.module.css"
//
// const links = {
//     textDecoration: 'none',
//     color: '#443e3c',
//     fontSize: '18px',
//     width: '100%'
// }
// const portfolioItem = {
//     marginTop: '5px',
//     marginBottom: '5px',
//     padding: '2em',
//     backgroundColor: '#eeeceb',
//     boxShadow: '0 8px 6px -8px black',    /* position: fixed; */
//     zIndex: '1',
//     transition: 'backgroundColor 1s'
// }
// export default () => (
//     <Box className={styles.margin} direction="column" align="center" justify="center">
//         <Link style={links} to="/portfolio/personal-site">
//             <Box style={portfolioItem} className={styles.portfolioItem} align="center" justify="center" fill>
//                 <Text weight="bold" size="xlarge">Personal Website</Text>
//                 <Text>Made using GatsbyJS</Text>
//             </Box>
//         </Link>
//         <Link style={links} to="/portfolio/bitsmo-exchange">
//             <Box style={portfolioItem} className={styles.portfolioItem} align="center" justify="center" fill>
//                 <Text weight="bold" size="xlarge">Bitsmo Cryptocurrency Exchange</Text>
//                 <Text>A cryptocurrency exchange made using React</Text>
//             </Box>
//         </Link>
//         <Link style={links} to="/portfolio/skyrouter">
//             <Box style={portfolioItem} className={styles.portfolioItem} align="center" justify="center" fill>
//                 <Text weight="bold" size="xlarge">SkyRouter</Text>
//                 <Text>Fleet tracking portal made using Ember</Text>
//             </Box>
//         </Link>
//         <Link style={links} to="/portfolio/skyrouter">
//             <Box style={portfolioItem} className={styles.portfolioItem} align="center" justify="center" fill>
//                 <Text weight="bold" size="xlarge">CRUD Authors</Text>
//                 <Text>Fleet tracking portal made using Ember</Text>
//             </Box>
//         </Link>
//
//     </Box>
