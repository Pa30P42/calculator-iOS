import { useState } from "react";

export const useCalc = () => {
  const [memory, setMemory] = useState(0);
  const [result, setResult] = useState(0);
  const [expectsDigit, setExpectsDigit] = useState(true);
  const [chosenOperation, setChosenOperation] = useState();
  const [display, setDisplay] = useState("0");

  const calculate = (rightOperand, chosenOperation) => {
    let newResult = result;

    switch (chosenOperation) {
      case "+":
        newResult += rightOperand;
        break;
      case "-":
        newResult -= rightOperand;
        break;
      case "×":
        newResult *= rightOperand;
        break;
      case "÷":
        if (rightOperand === 0) {
          return false;
        }

        newResult /= rightOperand;
        break;

      default:
    }

    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));
    return true;
  };

  // Pad buttons handlers
  const onDigitButtonClick = (digit) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 12) {
      return;
    }

    if (expectsDigit) {
      newDisplay = "";
      setExpectsDigit(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (expectsDigit) {
      newDisplay = "0";
    }

    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setExpectsDigit(false);
  };
  const onPercentButtonClick = () => {
    let newDisplay = display;

    if (newDisplay === "0" || newDisplay === "0.") {
      return;
    }

    if (newDisplay.indexOf("%") === -1) {
      newDisplay = newDisplay + "%";
    }

    setDisplay(newDisplay);
    setExpectsDigit(false);
  };

  const onOperatorButtonClick = (operator) => {
    let operand;

    if (display.includes("%")) {
      if (chosenOperation === "-" || chosenOperation === "+") {
        const arr = display.split("%");
        operand = Number(result * (arr[0] / 100));
      }
      if (chosenOperation === "×" || chosenOperation === "÷") {
        const arr = display.split("%");
        operand = Number(arr[0] / 100);
      }
    } else {
      operand = Number(display);
    }

    if (typeof chosenOperation !== "undefined" && !expectsDigit) {
      if (!calculate(operand, chosenOperation)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setChosenOperation(operator);
    setExpectsDigit(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onEqualButtonClick = () => {
    let operand;

    if (display.includes("%")) {
      if (chosenOperation === "-" || chosenOperation === "+") {
        const arr = display.split("%");
        operand = Number(result * (arr[0] / 100));
      }
      if (chosenOperation === "×" || chosenOperation === "÷") {
        const arr = display.split("%");
        operand = Number(arr[0] / 100);
      }
    } else {
      operand = Number(display);
    }

    if (typeof chosenOperation !== "undefined" && !expectsDigit) {
      if (!calculate(operand, chosenOperation)) {
        return;
      }
      setChosenOperation(undefined);
    } else {
      setDisplay(operand.toString());
    }
    setResult(operand);
    setExpectsDigit(true);
  };

  const onAllClearButtonClick = () => {
    setMemory(0);
    setResult(0);
    setChosenOperation(undefined);
    setDisplay("0");
    setExpectsDigit(true);
  };

  const onClearEntryButtonClick = () => {
    setDisplay("0");
    setExpectsDigit(true);
  };

  const onMemoryRecallButtonClick = () => {
    setDisplay(memory.toString());
    setExpectsDigit(true);
  };

  const onMemoryClearButtonClick = () => {
    setMemory(0);
    setExpectsDigit(true);
  };

  const onMemoryPlusButtonClick = () => {
    setMemory(memory + Number(display));
    setExpectsDigit(true);
  };

  const onMemoryMinusButtonClick = () => {
    setMemory(memory - Number(display));
    setExpectsDigit(true);
  };

  return {
    padBtnHandler: {
      onDigitButtonClick,
      onPointButtonClick,
      onPercentButtonClick,
      onOperatorButtonClick,
      onChangeSignButtonClick,
      onEqualButtonClick,
      onAllClearButtonClick,
      onClearEntryButtonClick,
      onMemoryRecallButtonClick,
      onMemoryClearButtonClick,
      onMemoryPlusButtonClick,
      onMemoryMinusButtonClick,
    },
    calcInfo: {
      memory,
      result,
      expectsDigit,
      chosenOperation,
      display,
    },
  };
};
