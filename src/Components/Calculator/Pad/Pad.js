import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import { ZeroButton } from "../Buttons/ButtonStyled";
import { Wrapper, Row } from "./PadStyled";

const Pad = ({
  onDigitButtonClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onClearEntryButtonClick,
  onMemoryRecallButtonClick,
  onMemoryClearButtonClick,
  onMemoryPlusButtonClick,
  onMemoryMinusButtonClick,
  onPercentButtonClick,
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }) => {
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick(keyCode - 48);
    } else if (keyCode >= 96 && keyCode <= 105) {
      onDigitButtonClick(keyCode - 96);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick("+");
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick("-");
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick("×");
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick("÷");
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick();
    } else if (keyCode === 46) {
      onClearEntryButtonClick();
    } else if (keyCode === 27) {
      onAllClearButtonClick();
    } else if (keyCode === 78) {
      onChangeSignButtonClick();
    } else if (keyCode === 80) {
      onMemoryPlusButtonClick();
    } else if (keyCode === 81) {
      onMemoryMinusButtonClick();
    } else if (keyCode === 82) {
      onMemoryRecallButtonClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <Wrapper>
      <Row>
        <Button color="#aaa" onClick={onAllClearButtonClick}>
          AC
        </Button>
        <Button color="#aaa" onClick={onChangeSignButtonClick}>
          -/+
        </Button>
        <Button color="#aaa" onClick={onPercentButtonClick}>
          %
        </Button>
        <Button onClick={() => onOperatorButtonClick("+")}>+</Button>
      </Row>
      <Row>
        <Button onClick={onMemoryRecallButtonClick}>MR</Button>
        <Button onClick={onMemoryClearButtonClick}>MC</Button>
        <Button onClick={onMemoryMinusButtonClick}>M-</Button>
        <Button onClick={onMemoryPlusButtonClick}>M+</Button>
      </Row>
      <Row>
        <Button onClick={() => onDigitButtonClick(7)}>7</Button>
        <Button onClick={() => onDigitButtonClick(8)}>8</Button>
        <Button onClick={() => onDigitButtonClick(9)}>9</Button>
        <Button onClick={() => onOperatorButtonClick("×")}>×</Button>
      </Row>
      <Row>
        <Button onClick={() => onDigitButtonClick(4)}>4</Button>
        <Button onClick={() => onDigitButtonClick(5)}>5</Button>
        <Button onClick={() => onDigitButtonClick(6)}>6</Button>
        <Button onClick={() => onOperatorButtonClick("÷")}>÷</Button>
      </Row>
      <Row>
        <Button onClick={() => onDigitButtonClick(1)}>1</Button>
        <Button onClick={() => onDigitButtonClick(2)}>2</Button>
        <Button onClick={() => onDigitButtonClick(3)}>3</Button>
        <Button onClick={() => onOperatorButtonClick("-")}>-</Button>
      </Row>
      <Row>
        <ZeroButton onClick={() => onDigitButtonClick(0)}>0</ZeroButton>
        <Button onClick={onPointButtonClick}>.</Button>
        <Button onClick={onEqualButtonClick}>=</Button>
      </Row>
    </Wrapper>
  );
};

export default Pad;
