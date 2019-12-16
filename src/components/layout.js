import React from "react"
import { Link } from "gatsby"
import {Box} from "grommet"
import styles from "./layout.module.css"


export default ({children}) => (
    <Box fill className={styles.layout} align="center">
      {children}
    </Box>
)
