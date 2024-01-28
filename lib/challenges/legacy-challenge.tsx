import { Challenge } from "../challenges";
import { ChallengeType } from "../challenge.type";

export const LegacyChallenge: Challenge = {
  id: 1,
  title: "Legacy challenge",
  slug: "legacy-challenge",
  type: ChallengeType.GAMEPLAY,
  teaser: "This is the Sims 4 legacy challenge",
  image: "dummy-image-challenges.jpeg",
  description: "This is the description of the legacy challenge",
};
