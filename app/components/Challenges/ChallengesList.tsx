"use client";
import {
  ChallengesListContainer,
  ChallengeDiv,
  TypeTag,
  ChallengeImageContainer,
} from "./Challenges.styled";
import { challenges } from "@/lib/challenges";
import Link from "next/link";

export default function ChallengesList() {
  return (
    <ChallengesListContainer>
      {challenges.map((challenge, index) => (
        <ChallengeDiv key={index}>
          <Link href={`/challenges/${challenge.slug}`}>
            <TypeTag>{challenge.type}</TypeTag>
            <ChallengeImageContainer>
              <img
                src={`/${challenge.image}`}
                alt={challenge.title}
                className="image"
              />
            </ChallengeImageContainer>

            <h2>{challenge.title}</h2>
            <p>{challenge.teaser}</p>
          </Link>
        </ChallengeDiv>
      ))}
    </ChallengesListContainer>
  );
}
