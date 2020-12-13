import React from "react";
import { StyledButton } from "./ButtonStyled";

const Button = ({ children, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
