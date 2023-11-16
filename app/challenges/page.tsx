"use client";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Image from "next/image";

// TODO: remove use client?

const ChallengesIntroduction = styled.p`
  color: red;
`;

export default function Challenges() {
  return (
    <>
      <Header />
      <ChallengesIntroduction>
        If you are tired of playing the same story with your Sims all the time,
        you might want to try out some Sims 4 challenges to spice up your
        gameplay. Here you will find a list of some of the most fun and maybe
        difficult challenges!
      </ChallengesIntroduction>
      <Image
        src="/sims4-challenges.png"
        width={500}
        height={500}
        alt="An image of three sims"
      ></Image>
    </>
  );
}
