import { Wrapper } from "./CalculatorStyled";
import Display from "./Display/Display";
import { useCalc } from "./hooks/useCalc";
import Pad from "./Pad/Pad";

export const Calculator = () => {
  const { padBtnHandler, calcInfo } = useCalc();

  const {
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
  } = padBtnHandler;

  const { memory, result, expectsDigit, chosenOperation, display } = calcInfo;

  return (
    <>
      <Wrapper>
        <Display
          value={display}
          hasMemory={memory !== 0}
          expression={
            typeof chosenOperation !== "undefined"
              ? `${result}${chosenOperation}${expectsDigit ? "" : display}`
              : ""
          }
        />
        <Pad
          onDigitButtonClick={onDigitButtonClick}
          onPointButtonClick={onPointButtonClick}
          onOperatorButtonClick={onOperatorButtonClick}
          onChangeSignButtonClick={onChangeSignButtonClick}
          onEqualButtonClick={onEqualButtonClick}
          onAllClearButtonClick={onAllClearButtonClick}
          onClearEntryButtonClick={onClearEntryButtonClick}
          onMemoryRecallButtonClick={onMemoryRecallButtonClick}
          onMemoryClearButtonClick={onMemoryClearButtonClick}
          onMemoryPlusButtonClick={onMemoryPlusButtonClick}
          onMemoryMinusButtonClick={onMemoryMinusButtonClick}
          onPercentButtonClick={onPercentButtonClick}
        />
      </Wrapper>
    </>
  );
};
