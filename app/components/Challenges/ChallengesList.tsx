"use client";
import {
  ChallengesListContainer,
  ChallengeDiv,
  TypeTag,
  ChallengeImageContainer,
} from "./Challenges.styled";
import { challenges } from "@/lib/challenges";

export default function ChallengesList() {
  return (
    <ChallengesListContainer>
      {challenges.map((challenge, index) => (
        <ChallengeDiv key={index}>
          <TypeTag>{challenge.type}</TypeTag>
          <ChallengeImageContainer>
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
