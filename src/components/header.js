import React from "react"
import { Link } from "gatsby"
import {Box, Text} from "grommet"
import styles from "./layout.module.css"
import { slide as Menu } from 'react-burger-menu'
import styled from "styled-components"
// import { Document } from 'react-pdf'
import pdf from '../images/Resume.pdf';



var burgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '20px',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    bottom: '0',
    left: '0',
    width: '200px'

  },
  bmMenu: {
    background: 'rgb(238, 236, 235)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad'
  },
  bmItem: {
    display: 'inline-block',
    fontSize: '23px',
    marginBottom: '10px'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    marginLeft: '-50%',
    height: '110%',
    marginTop: '-10%'
  }
}


const activeLink = {
    textDecoration: 'underline'
}
const header = () => {
    // 768 pixels enable burger menu
      return(
    <Box className={styles.header} align="center" justify="center" fill>
          <Box className={styles.hideMobile} gap="xlarge" direction="row" align="center" >
              <Link className={styles.links} activeStyle={activeLink} to="/">home</Link>
              <Link className={styles.links} activeStyle={activeLink} partiallyActive={true} to="portfolio">portfolio</Link>
              <Link className={styles.links} activeStyle={activeLink} to="contact">contact</Link>
              <a href={pdf} className={styles.links} target="_blank">resume</a>
          </Box>
          <Box className={styles.hideDesktop}>
              <Menu styles={burgerStyles}>
                  <Link className={styles.links} activeStyle={activeLink} to="/">home</Link>
                  <Link className={styles.links} activeStyle={activeLink} partiallyActive={true} to="portfolio">portfolio</Link>
                  <Link className={styles.links} activeStyle={activeLink} to="contact">contact</Link>
                  <a href={pdf} className={styles.links} activeStyle={activeLink}>resume</a>
              </Menu>
        </Box>
      </Box>
    );
}

export default header;
