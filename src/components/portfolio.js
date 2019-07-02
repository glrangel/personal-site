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

-webkit-transition: background-color 1s;
-moz-transition: background-color 1s;
-o-transition: background-color 1s;
transition: background-color 1s;
`;

export default () => (
    <Box className={styles.margin} direction="column" align="center" justify="center">
        <Link className={styles.links} to="/portfolio/personal-site">
            <MyBox className={styles.hover} align="center" justify="center" fill>
                <Text weight="bold" size="xlarge">Personal Website</Text>
                <Text>Made using GatsbyJS</Text>
            </MyBox>
        </Link>
        <Link className={styles.links} to="/portfolio/bitsmo-exchange">
            <MyBox className={styles.hover} align="center" justify="center" fill>
                <Text weight="bold" size="xlarge">Bitsmo Cryptocurrency Exchange</Text>
                <Text>A cryptocurrency exchange made using React</Text>
            </MyBox>
        </Link>
        <Link className={styles.links} to="/portfolio/skyrouter">
            <MyBox className={styles.hover} align="center" justify="center" fill>
                <Text weight="bold" size="xlarge">SkyRouter</Text>
                <Text>Fleet tracking portal made using Ember</Text>
            </MyBox>
        </Link>
        <Link className={styles.links} to="/portfolio/skyrouter">
            <MyBox className={styles.hover} align="center" justify="center" fill>
                <Text weight="bold" size="xlarge">CRUD Authors</Text>
                <Text>Fleet tracking portal made using Ember</Text>
            </MyBox>
        </Link>

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
