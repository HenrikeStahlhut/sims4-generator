"use client";
import styled from "styled-components";
import Image from "next/image";
import ChallengesList from "../components/Challenges/ChallengesList";
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
  margin: 20px 0px 40px 0px;
  gap: 50px;

  @media (max-width: 600px) {
    flex-direction: column;

    .image {
      display: none;
    }
  }
`;

// solution found on https://github.com/vercel/next.js/discussions/18739
const TitleImageContainer = styled.div`
  width: 700px;

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  @media (max-width: 1100px) {
    width: 350px;
  }
`;

export default function Challenges() {
  return (
    <>
      <ContentLayout>
        <IntroductionContainer>
          <ChallengesIntroduction>
            <h3>Sims4 Challenges</h3>
            <p>
              If you are tired of playing the same story with your Sims all the
              time, you might want to try out some Sims 4 challenges to spice up
              your gameplay. Here you will find a list of some of the most fun
              and maybe difficult challenges!
            </p>
          </ChallengesIntroduction>
          <TitleImageContainer>
            <Image
              className="image"
              src="/sims4-challenges3.png"
              layout="fill"
              alt="A happy Sims4 family"
            />
          </TitleImageContainer>
        </IntroductionContainer>

        <ChallengesList />
      </ContentLayout>
    </>
  );
}
