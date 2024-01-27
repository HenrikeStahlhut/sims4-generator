enum ChallengeType {
  "GAMEPLAY",
  "BUILDMODE",
  "CAS",
}

interface Challenge {
  id: number;
  title: string;
  slug: string;
  type: ChallengeType;
  description: string | React.ReactNode;
  image: string;
}

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Legacy challenge",
    slug: "legacy-challenge",
    type: ChallengeType.GAMEPLAY,
    description: <h1 style={{ color: "red" }}>This is the legacy challenge</h1>,
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 2,
    title: "Rags to Riches challenge",
    slug: "rags-to-riches-challenge",
    type: ChallengeType.GAMEPLAY,
    description: "This is the Sims 4 rags to riches challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 3,
    title: "100 Baby challenge",
    slug: "100-baby-challenge",
    type: ChallengeType.GAMEPLAY,
    description: "This is the Sims 4 100 baby challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 4,
    title: "Not so berry challenge",
    slug: "not-so-berry-challenge",
    type: ChallengeType.GAMEPLAY,
    description: "This is the Sims 4 not so berry challenge",
    image: "not-so-berry.jpeg",
  },
  {
    id: 4,
    title: "Off the grid challenge",
    slug: "off-the-grid-challenge",
    type: ChallengeType.GAMEPLAY,
    description: "This is the Sims 4 off the grid challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 5,
    title: "Every room is a different color",
    slug: "every-room-is-a-different-color",
    type: ChallengeType.BUILDMODE,
    description: "This is the Sims 4 every room is a different color challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 6,
    title: "Black and white build challenge",
    slug: "black-and-white-build-challenge",
    type: ChallengeType.BUILDMODE,
    description: "This is the Sims 4 black and white build challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 6,
    title: "Black and white CAS challenge",
    slug: "black-and-white-cas-challenge",
    type: ChallengeType.CAS,
    description: "This is the Sims 4 black and white CAS challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 5,
    title: "Every room is a different budget",
    slug: "every-room-is-a-different-budget",
    type: ChallengeType.BUILDMODE,
    description:
      "This is the Sims 4 every room is a different budget challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 6,
    title: "Inverted Colors CAS challenge",
    slug: "inverted-colors-cas-challenge",
    type: ChallengeType.CAS,
    description: "This is the Sims 4 Inverted Colors CAS challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 6,
    title: "Random genetics CAS challenge",
    slug: "random-genetics-cas-challenge",
    type: ChallengeType.CAS,
    description: "This is the Sims 4 Random genetics CAS challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 1,
    title: "Nightmare Legacy challenge",
    slug: "nightmare-legacy-challenge",
    type: ChallengeType.GAMEPLAY,
    description: "This is the Sims 4 Nightmare Legacy challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 1,
    title: "Black widow challenge",
    slug: "black-widow-challenge",
    type: ChallengeType.GAMEPLAY,
    description: "This is the Sims 4 Black widow challenge",
    image: "black-widow.png",
  },
  {
    id: 1,
    title: "Vampire Legacy challenge",
    slug: "vampire-legacy-challenge",
    type: ChallengeType.GAMEPLAY,
    description: "This is the Sims 4 Vampire Legacy challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 1,
    title: "10 minute build challenge",
    slug: "10-minute-build-challenge",
    type: ChallengeType.BUILDMODE,
    description: "This is the Sims 4 10 minute build challenge",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 1,
    title: "The Sims 4 Random Challenge by James Turner",
    slug: "random-challenge-by-james-turner",
    type: ChallengeType.BUILDMODE,
    description: "The Sims 4 Random Challenge by James Turner",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 1,
    title: "Impossible micro home challenge",
    slug: "impossible-micro-home-challenge",
    type: ChallengeType.BUILDMODE,
    description: "The Sims 4 Impossible micro home challenge from lilsimsie",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 1,
    title: "Cursed build challenge by Plumbella",
    slug: "cursed-build-challenge-by-plumbella",
    type: ChallengeType.BUILDMODE,
    description: "The Sims 4 Random Cursed build challenge by Plumbella",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 1,
    title: "Super Sim challenge by James Turner",
    slug: "super-sim-challenge-by-james-turner",
    type: ChallengeType.GAMEPLAY,
    description: "The Sims 4 Super Sim challenge by James Turner",
    image: "dummy-image-challenges.jpeg",
  },
  {
    id: 1,
    title: "Get rich from ... challenge",
    slug: "get-rich-from-challenge",
    type: ChallengeType.GAMEPLAY,
    description: "The Sims 4 Get rich from ... challenge",
    image: "dummy-image-challenges.jpeg",
  },
];
