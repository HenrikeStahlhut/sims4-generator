import styled from "styled-components";

export const Logo = styled.img`
  height: 100%;
`;

export const HeaderContainer = styled.div`
  background-color: var(--white);
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
