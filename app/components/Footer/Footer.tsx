"use client";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #95cc24;
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;

  ul {
    display: flex;
    flex-direction: row;

    li {
      margin: 0 20px 0 20px;
      color: #fff;
      font-weight: 600;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Credits</a>
        </li>
      </ul>
    </StyledFooter>
  );
}
