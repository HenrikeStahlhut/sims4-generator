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

      &:hover {
        color: var(--dark-green);
      }
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

// import { useState } from "react";
// import MenuButton from "./MenuButton";
// import styled from "styled-components";

// const StyledNav = styled.div<{ open: boolean }>`
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

//   @media (max-width: 600px) {
//     background-color: pink;
//     display: ${({ open }) => (open ? "flex" : "none")};
//     flex-direction: column;
//     align-items: center;
//     top: 0;
//     right: 0;
//     height: 100vh;
//     width: 100vw;

//     .li {
//       color: black;
//       text-decoration: none;
//       padding: 30px 0px;
//       font-size: 2em;

//       &:hover {
//         color: var(--dark-green);
//       }
//     }
//   }
// `;

// const Nav = styled.ul`
//   width: 20em;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;

//   li {
//     font-weight: 700;
//     :hover {
//       color: #7aa117;
//     }
//   }

//   @media (max-width: 600px) {
//     width: 20em;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
// `;

// export default function Menu() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <MenuButton open={menuOpen} setOpen={setMenuOpen} />
//       <StyledNav open={menuOpen}>
//         <Nav>
//           <li>
//             <a href="/" onClick={() => setMenuOpen(false)}>
//               Randomizer
//             </a>
//           </li>
//           <li>
//             <a href="/" onClick={() => setMenuOpen(false)}>
//               Challenges
//             </a>
//           </li>
//           <li>
//             <a href="/" onClick={() => setMenuOpen(false)}>
//               About
//             </a>
//           </li>
//         </Nav>
//       </StyledNav>
//     </>
//   );
// }
