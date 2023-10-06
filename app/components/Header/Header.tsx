"use client";
import styled from "styled-components";
import Menu from "../Menu/Menu";

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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

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
