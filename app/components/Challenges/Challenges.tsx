"use client";
import styled from "styled-components";
import { challenges } from "@/lib/challenges";
import Image from "next/image";

// TODO: add individual image to each challenge
// TODO: every image same size, regarding the original image size

const ChallengesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ChallengeDiv = styled.div`
  width: 300px;
  margin: 20px;
`;

export default function ChallengesList() {
  return (
    <ChallengesListContainer>
      {challenges.map((challenge) => (
        <ChallengeDiv key={challenge.id}>
          <Image
            src={`/${challenge.image}`}
            width={270}
            height={270}
            alt={challenge.title}
          ></Image>
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
        </ChallengeDiv>
      ))}
    </ChallengesListContainer>
  );
}
