"use client";
import { challenges } from "@/lib/challenges";
import styled from "styled-components";
import ContentLayout from "@/app/components/Layout/Layout";
import Image from "next/image";

const ChallengeTitle = styled.h1`
  font-family: "Sims4Font";
  font-size: 2em;
`;

export default function Challenges({ params }: { params: { slug: string } }) {
  const challenge = challenges.find(
    (challenge) => challenge.slug.toString() === params.slug,
  );

  if (!challenge) {
    return <>Challenge not found</>;
  }

  return (
    <>
      <ContentLayout>
        <Image
          src={`/${challenge.image}`}
          width={900}
          height={0}
          alt="A happy Sims4 family"
        />
        <ChallengeTitle>{challenge.title}</ChallengeTitle>
        <p>{challenge.description}</p>
      </ContentLayout>
    </>
  );
}
