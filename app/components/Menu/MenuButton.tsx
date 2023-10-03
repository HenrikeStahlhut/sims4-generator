import styled from "styled-components";

// TODO: colors

type MenuButtonProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const StyledMenuButton = styled.button<{ open: boolean }>`
  @media (max-width: 600px) {
    position: ${({ open }) => (open ? "absolute" : "relative")};
    padding: 0;
    z-index: 2;
    background: transparent;
    color: ${({ open }) => (open ? "blue" : "black")};

    div {
      position: relative;
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      margin-top: 0.4rem;
      background-color: ${({ open }) => (open ? "blue" : "black")};

      transition: all 0.3s linear;
      transform-origin: 1px;

      .divOne {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      .divTwo {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }
      .divThree {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export default function MenuButton({ open, setOpen }: MenuButtonProps) {
  return (
    <StyledMenuButton open={open} onClick={() => setOpen(!open)}>
      <div className="divOne" />
      <div className="divTwo" />
      <div className="divThree" />
    </StyledMenuButton>
  );
}
