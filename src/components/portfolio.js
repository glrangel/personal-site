import React from "react"
import { Link } from "gatsby"
import {Box, Text} from "grommet"
import styles from "./layout.module.css"

export default () => (
    <Box className={styles.margin} direction="column" align="center" justify="center">
        <Link className={styles.links} to="/portfolio/personal-site">
            <Box className={styles.portfolioItem} align="center" justify="center" fill>
                <Text weight="bold" size="xlarge">Personal Website</Text>
                <Text>Made using GatsbyJS</Text>
            </Box>
        </Link>
        <Link className={styles.links} to="/portfolio/bitsmo-exchange">
            <Box className={styles.portfolioItem} align="center" justify="center" fill>
                <Text weight="bold" size="xlarge">Bitsmo Cryptocurrency Exchange</Text>
                <Text>A cryptocurrency exchange made using React</Text>
            </Box>
        </Link>
        <Link className={styles.links} to="/portfolio/skyrouter">
            <Box className={styles.portfolioItem} align="center" justify="center" fill>
                <Text weight="bold" size="xlarge">SkyRouter</Text>
                <Text>Fleet tracking portal made using Ember</Text>
            </Box>
        </Link>
        <Link className={styles.links} to="/portfolio/skyrouter">
            <Box className={styles.portfolioItem} align="center" justify="center" fill>
                <Text weight="bold" size="xlarge">CRUD Authors</Text>
                <Text>Fleet tracking portal made using Ember</Text>
            </Box>
        </Link>

    </Box>


)
