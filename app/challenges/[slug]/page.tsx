"use client";
import { challenges } from "@/lib/challenges";

export default function Challenges({ params }: { params: { slug: string } }) {
  const challenge = challenges.find(
    (challenge) => challenge.slug.toString() === params.slug,
  );

  if (!challenge) {
    return <>not found</>;
  }

  return (
    <>
      test: {params.slug} {challenge.title}
    </>
  );
}
