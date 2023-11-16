import { useState } from "react";
import Link from "next/link";
import MenuButton from "./MenuButton";
import styled from "styled-components";

export const StyledNav = styled.div<{ open: boolean }>`
  /* overflow: hidden; */
  display: flex;
  flex-direction: row;
  justify-content: center;

  .link {
    color: black;
    text-decoration: none;
    padding: 0px 30px;
    font-size: 1.2em;

    &:hover {
      color: #7aa117;
    }
  }

  @media (max-width: 600px) {
    background-color: #7aa117;
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;

    .link {
      color: white;
      text-decoration: none;
      padding: 30px 0px;
      font-size: 2em;
      font-weight: 500;
    }
  }
`;

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // TODO: add Profile to menu

  return (
    <>
      <MenuButton open={menuOpen} setOpen={setMenuOpen} />
      <StyledNav className="topnav" open={menuOpen}>
        <Link href="/" className="link" onClick={() => setMenuOpen(false)}>
          Randomizer
        </Link>
        <Link href="/" className="link" onClick={() => setMenuOpen(false)}>
          Challenges
        </Link>
        <Link href="/" className="link" onClick={() => setMenuOpen(false)}>
          About
        </Link>
      </StyledNav>
    </>
  );
}
