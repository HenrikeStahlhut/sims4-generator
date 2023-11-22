import styled from "styled-components";

export const ChallengesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const ChallengeDiv = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 280px;

  @media only screen and (device-width: 768px) {
    /* default iPad screens */
    width: 17.5em;
  }

  h2 {
    font-family: "Sims4Font";
    font-size: 1.2em;
    margin: 10px 0px 2px 0px;
  }
`;

export const TypeTag = styled.div`
  position: absolute;
  top: 125px;
  left: 10px;
  display: flex;
  border-radius: 15px;
  padding: 5px 12px;
  align-items: center;
  justify-content: center;
  background-color: #9edcf5;
  color: #155670;
  font-size: 13px;
  z-index: 50;
  font-weight: bold;
`;

export const ChallengeImageContainer = styled.div`
  width: 18.75em;
  height: 10.625em;

  .image {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    width: 20em;
    height: 12em;
  }
`;
