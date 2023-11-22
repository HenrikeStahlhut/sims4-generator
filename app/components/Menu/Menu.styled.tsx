import styled from "styled-components";

export const StyledOpenMenuButton = styled.button<{ open: boolean }>`
  @media (max-width: 600px) {
    padding: 0;
    z-index: 110;
    background: transparent;
    color: ${({ open }) => (open ? "var(--white)" : "var(--black)")};

    div {
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      margin-top: 0.4rem;
      background-color: ${({ open }) =>
        open ? "var(--white)" : "var(--black)"};

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 100;

  .link {
    color: var(--black);
    text-decoration: none;
    padding: 0px 30px;
    font-size: 1.2em;
    font-family: "Sims4Font";

    &:hover {
      color: var(--lightblue);
    }
  }

  @media (max-width: 600px) {
    background-color: var(--lightgreen);
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;

    .link {
      color: var(--white);
      text-decoration: none;
      padding: 30px 0px;
      font-size: 2em;
      font-weight: 500;

      &:hover {
        color: var(--darkgreen);
      }
    }
  }
`;
