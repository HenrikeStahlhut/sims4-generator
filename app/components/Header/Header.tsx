"use client";
import Menu from "../Menu/Menu";
import { HeaderContainer, Logo } from "./Header.styled";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo src="/logo_dummy.png" />
        <Menu />
      </HeaderContainer>
    </>
  );
}
