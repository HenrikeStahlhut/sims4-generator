"use client";
import styled from "styled-components";
import { challenges } from "@/lib/challenges";
import Image from "next/image";

// TODO: add individual image to each challenge
// TODO: every image same size, regarding the original image size
// !: resize images

const ChallengesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ChallengeDiv = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 300px;

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
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  background-color: #3caad6;
  color: white;
`;

const StyledImage = styled(Image)`
  border-radius: 15px;
`;

export default function ChallengesList() {
  return (
    <ChallengesListContainer>
      {challenges.map((challenge) => (
        <ChallengeDiv key={challenge.id}>
          <TypeTag>{challenge.type}</TypeTag>
          <StyledImage
            src={`/${challenge.image}`}
            width={280}
            height={280}
            alt={challenge.title}
          />

          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
        </ChallengeDiv>
      ))}
    </ChallengesListContainer>
  );
}
