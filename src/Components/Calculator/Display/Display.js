import React from "react";
import { Wrapper, Expression, UpperResult, Value } from "./DisplayStyled";

const Display = ({ value, hasMemory, expression }) => {
  return (
    <Wrapper>
      <UpperResult>
        {hasMemory && <span>M</span>}

        <Expression>{expression}</Expression>
      </UpperResult>

      <Value>{value}</Value>
    </Wrapper>
  );
};

export default Display;
