"use client";
import styled from "styled-components";

const Logo = styled.img`
  height: 100%;
`;

const HeaderContainer = styled.div`
  background-color: #fff;
  height: 100px;
  padding: 20px 50px 20px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.ul`
  width: 20em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    font-family: "Sims4Font";
    :hover {
      color: #3caad6;
    }
  }
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo src="/logo_dummy.png" />
        <Nav>
          <li>
            <a href="/">Randomizer</a>
          </li>
          <li>
            <a href="/challenges">Challenges</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </Nav>
      </HeaderContainer>
    </>
  );
}
