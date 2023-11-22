"use client";
import styled from "styled-components";
import { challenges } from "@/lib/challenges";
import Image from "next/image";

const ChallengesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ChallengeDiv = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 280px;

  @media only screen and (device-width: 768px) {
    /* default iPad screens */
    width: 17.5em;
  }

  h2 {
    font-family: "Sims4Font";
    font-size: 1.2em;
    margin: 10px 0px 2px 0px;
  }
`;

const TypeTag = styled.div`
  position: absolute;
  top: 125px;
  left: 10px;
  display: flex;
  border-radius: 15px;
  padding: 5px 12px;
  align-items: center;
  justify-content: center;
  background-color: #9edcf5;
  color: #155670;
  font-size: 13px;
  z-index: 100;
`;

const ChallengeImageContainer = styled.div`
  /* width: 300px;
  height: 200px;

  > div {
    position: unset !important;
  }

  .image {
    border-radius: 15px;
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  } */

  /* width: 300px;
  height: 170px; */

  width: 18.75em;
  height: 10.625em;

  .image {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    width: 20em;
    height: 12em;
  }
`;

export default function ChallengesList() {
  return (
    <ChallengesListContainer>
      {challenges.map((challenge, index) => (
        <ChallengeDiv key={index}>
          <TypeTag>{challenge.type}</TypeTag>
          <ChallengeImageContainer>
            {/* <Image
              className="image"
              src={`/${challenge.image}`}
              fill
              alt={challenge.title}
            /> */}

            <img
              src={`/${challenge.image}`}
              alt="{challenge.title}"
              className="image"
            />
          </ChallengeImageContainer>

          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
        </ChallengeDiv>
      ))}
    </ChallengesListContainer>
  );
}
