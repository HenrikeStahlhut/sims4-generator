import { useState } from "react";
import MenuButton from "./MenuButton";
import styled from "styled-components";

const StyledNav = styled.div<{ open: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 600px) {
    background-color: pink;
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;

    .li {
      color: black;
      text-decoration: none;
      padding: 30px 0px;
      font-size: 2em;

      &:hover {
        color: var(--dark-green);
      }
    }
  }
`;

const Nav = styled.ul`
  width: 20em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    font-weight: 700;
    :hover {
      color: #7aa117;
    }
  }
`;

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MenuButton open={menuOpen} setOpen={setMenuOpen} />
      <StyledNav open={menuOpen}>
        <Nav>
          <li>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Randomizer
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Challenges
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
        </Nav>
      </StyledNav>
    </>
  );
}
