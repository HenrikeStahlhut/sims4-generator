import styled from "styled-components";

type MenuButtonProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

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

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }
      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

// three divs = menu bars of the menu icon and are used for the animations when opening/closing the menu

export default function MenuButton({ open, setOpen }: MenuButtonProps) {
  return (
    <StyledOpenMenuButton open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledOpenMenuButton>
  );
}
