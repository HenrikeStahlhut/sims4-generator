import { ChallengeType } from "./challenge.type";
import { LegacyChallenge } from "./challenges/legacy-challenge";
import { HundredBabyChallenge } from "./challenges/100-baby-challenge";
import { RagsToRichesChallenge } from "./challenges/rags-to-riches";
import { NotSoBerryChallenge } from "./challenges/not-so-berry";
import { OffTheGridChallenge } from "./challenges/off-the-grid";
import { EveryRoomDifferentColorChallenge } from "./challenges/every-room-different-color";
import { BlackAndWhiteBuildChallenge } from "./challenges/bw-build";
import { BlackAndWhiteCASChallenge } from "./challenges/bw-cas";
import { EveryRoomDifferentBudgetChallenge } from "./challenges/every-room-different-budget";
import { InvertedCASChallenge } from "./challenges/inverted-cas";
import { RandomGeneticsChallenge } from "./challenges/random-genetics";
import { NightmareLegacyChallenge } from "./challenges/nightmare-legacy";
import { BlackWidowChallenge } from "./challenges/black-widow";
import { VampireLegacyChallenge } from "./challenges/vampire-legacy";
import { TenMinuteBuildChallenge } from "./challenges/10-minute-build";
import { RandomChallengeJamesTurner } from "./challenges/random-challenge-jt";
import { ImpossibleMicroHomeChallenge } from "./challenges/impossible-micro-home";
import { CursedBuildPlumbellaChallenge } from "./challenges/cursed-build-plumbella";
import { SuperSimChallenge } from "./challenges/super-sim";
import { GetRichFromChallenge } from "./challenges/get-rich-from-challenge";

// TODO: type is a number, display as gameplay, buildmode or cas

export interface Challenge {
  id: number;
  title: string;
  slug: string;
  type: ChallengeType;
  teaser: string | React.ReactNode;
  image: string;
  description?: string | React.ReactNode;
}

export const challenges: Challenge[] = [
  LegacyChallenge,
  HundredBabyChallenge,
  RagsToRichesChallenge,
  NotSoBerryChallenge,
  OffTheGridChallenge,
  EveryRoomDifferentColorChallenge,
  BlackAndWhiteBuildChallenge,
  BlackAndWhiteCASChallenge,
  EveryRoomDifferentBudgetChallenge,
  InvertedCASChallenge,
  RandomGeneticsChallenge,
  NightmareLegacyChallenge,
  BlackWidowChallenge,
  VampireLegacyChallenge,
  TenMinuteBuildChallenge,
  RandomChallengeJamesTurner,
  ImpossibleMicroHomeChallenge,
  CursedBuildPlumbellaChallenge,
  SuperSimChallenge,
  GetRichFromChallenge,
];
