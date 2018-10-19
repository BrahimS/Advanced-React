import React from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Styled from 'styled-components'

const Logo = Styled.h1`
  position: relative;
  font-size: 4rem;
  margin-left: 2rem;
  z-index: 1;
  transform: skew(-7deg);
  a {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    background: ${props => props.theme.red};
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;


const StyleHeader = Styled.header`
  .bar{
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 1px solid ${props => props.theme.black}
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey}
  }
`;

const Header = () => {
  return (
    <StyleHeader>
      <nav className="bar">
        <Logo>
          <Link href="/">
            <a> Sick fits</a>
          </Link>
        </Logo>
        <Nav></Nav>
      </nav>
      <div className="sub-bar">
      <p>Search</p>
      </div>
      <article>Cart</article>
    </StyleHeader>
  )
}
export default Header