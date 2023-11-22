import styled from "styled-components";

export const StyledOpenMenuButton = styled.button<{ open: boolean }>`
  @media (max-width: 600px) {
    /* position: ${({ open }) => (open ? "absolute" : "relative")}; */
    padding: 0;
    z-index: 2;
    background: transparent;
    color: ${({ open }) => (open ? "white" : "black")};

    div {
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      margin-top: 0.4rem;
      background-color: ${({ open }) => (open ? "white" : "black")};

      transition: all 0.3s linear;
      transform-origin: 1px;

      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

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
