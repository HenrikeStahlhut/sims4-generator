"use client";
import styled from "styled-components";
import Image from "next/image";
import ChallengesList from "../components/Challenges/Challenges";
import ContentLayout from "../components/Layout/Layout";

// TODO: remove use client?
// TODO: add loading.tsx and error, and not found page

const ChallengesIntroduction = styled.section`
  width: 60%;

  h3 {
    font-family: "Sims4Font";
    font-size: 2.5em;
    color: #3caad6;
    margin-bottom: 10px;
  }
`;

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`;

export default function Challenges() {
  return (
    <>
      <ContentLayout>
        <IntroductionContainer>
          <ChallengesIntroduction>
            <h3> Sims4 Challenges</h3>
            <p>
              If you are tired of playing the same story with your Sims all the
              time, you might want to try out some Sims 4 challenges to spice up
              your gameplay. Here you will find a list of some of the most fun
              and maybe difficult challenges!
            </p>
          </ChallengesIntroduction>
          <Image
            src="/sims4-challenges.jpg"
            width={200}
            height={300}
            alt="An image of three sims"
          ></Image>
        </IntroductionContainer>

        <ChallengesList />
      </ContentLayout>
    </>
  );
}
