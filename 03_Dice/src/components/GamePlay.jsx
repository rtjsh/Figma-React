import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import { useState } from "react";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const Rolldice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number.");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);

    setcurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} Rolldice={Rolldice} />

      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <OutlineButton onClick={() => setshowRules((prev) => !prev)}>
          {showRules ? "Hide " : "Show "}
          Rules
        </OutlineButton>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.div`
  .topSection {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
