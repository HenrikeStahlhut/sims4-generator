import { useState } from "react";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { StyledNav } from "./Menu.styled";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MenuButton open={menuOpen} setOpen={setMenuOpen} />
      <StyledNav className="topnav" open={menuOpen}>
        <Link href="/" className="link" onClick={() => setMenuOpen(false)}>
          Randomizer
        </Link>
        <Link
          href="/challenges"
          className="link"
          onClick={() => setMenuOpen(false)}
        >
          Challenges
        </Link>
        <Link href="/" className="link" onClick={() => setMenuOpen(false)}>
          About
        </Link>
      </StyledNav>
    </>
  );
}
