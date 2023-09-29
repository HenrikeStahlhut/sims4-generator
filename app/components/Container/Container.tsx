"use client";
import styled from "styled-components";

type ContainerProps = {
  children: JSX.Element;
};

const StyledContainer = styled.div`
  background-color: lightblue;
`;

export default function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
