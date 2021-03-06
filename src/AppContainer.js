import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import ServerSideStyles from "./components/ServerSideStyles"
import { ThemeProvider } from 'styled-components'

const theme = {
  color: 'red',
};

const AppContainer = (props) => (
  <ThemeProvider theme={theme}>
    <Container>
      <DefaultHeadMeta />
      <Header />
      <Content>
        { props.children }
      </Content>
      <Footer />
      <ServerSideStyles />
    </Container>
  </ThemeProvider>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
