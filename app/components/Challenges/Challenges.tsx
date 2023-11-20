"use client";
import styled from "styled-components";
import { challenges } from "@/lib/challenges";
import Image from "next/image";

const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// TODO: add individual image to each challenge

export default function ChallengesList() {
  return (
    <ChallengesContainer>
      {challenges.map((challenge) => (
        <div key={challenge.id}>
          <Image
            src={`/${challenge.image}`}
            width={300}
            height={300}
            alt={challenge.title}
          ></Image>
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
        </div>
      ))}
    </ChallengesContainer>
  );
}
