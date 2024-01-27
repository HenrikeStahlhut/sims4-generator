"use client";
import { challenges } from "@/lib/challenges";

export default function Challenges({ params }: { params: { id: string } }) {
  const challenge = challenges.find(
    (challenge) => challenge.id.toString() === params.id,
  );

  if (!challenge) {
    return <>not found</>;
  }

  return (
    <>
      test: {params.id} {challenge.title}
    </>
  );
}
