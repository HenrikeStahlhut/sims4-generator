"use client";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: lightblue;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Nav = styled.ul`
  width: 20em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <h2>Logo</h2>
        <Nav>
          <li>
            <a href="/">Randomizer</a>
          </li>
          <li>
            <a href="/">Challenges</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </Nav>
      </HeaderContainer>
    </>
  );
}
