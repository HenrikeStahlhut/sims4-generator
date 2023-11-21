"use client";
import styled from "styled-components";
import { challenges } from "@/lib/challenges";
import Image from "next/image";

// TODO: add individual image to each challenge
// TODO: every image same size, regarding the original image size
// TODO: media query for mobile
// !: resize images

const ChallengesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (min-width: 960px) {
    /* styles for browsers larger than 960px; */
  }
  @media only screen and (min-width: 1440px) {
    /* styles for browsers larger than 1440px; */
  }
  @media only screen and (min-width: 2000px) {
    /* for sumo sized (mac) screens */
  }
  @media only screen and (max-device-width: 600px) {
    /* styles for mobile browsers smaller than 600px; (iPhone) */
    justify-content: center;
  }
`;

const ChallengeDiv = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 280px;

  @media only screen and (device-width: 768px) {
    /* default iPad screens */
    width: 280px;
  }

  h2 {
    font-family: "Sims4Font";
    font-size: 1.2em;
    margin: 10px 0px 2px 0px;
  }
`;

const TypeTag = styled.div`
  position: absolute;
  top: 110px;
  left: 10px;
  display: flex;
  border-radius: 15px;
  padding: 5px 12px;
  align-items: center;
  justify-content: center;
  background-color: #9edcf5;
  color: #155670;
  font-size: 13px;
`;

const ChallengeImageContainer = styled.div`
  width: 300px;

  .image {
    border-radius: 15px;
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export default function ChallengesList() {
  return (
    <ChallengesListContainer>
      {challenges.map((challenge) => (
        <ChallengeDiv key={challenge.id}>
          <TypeTag>{challenge.type}</TypeTag>
          <ChallengeImageContainer>
            <Image
              className="image"
              src={`/${challenge.image}`}
              layout="fill"
              alt={challenge.title}
            />
          </ChallengeImageContainer>

          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
        </ChallengeDiv>
      ))}
    </ChallengesListContainer>
  );
}
