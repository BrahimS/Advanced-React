import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};


injectGlobal`
  @font-face {
    font-family: "radnika_next";
    src: url('/static/radnikanext-medium-webfont.woff2');
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:after, *:before {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    font-size: 1.5rem;
    font-family: "radnika_next";
  }
`;
const StyledPage = Styled.div`
  background: beige;
  color: ${props => props.theme.black};
`;

const Inner = Styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  background: ${props => props.theme.lightgrey};
`;



export default class PageLayout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            { this.props.children }
          </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}
