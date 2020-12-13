import styled from "styled-components";

export const StyledButton = styled.div`
  font-family: inherit;
  text-align: center;
  font-size: 16px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => {
    // if (props.color) {
    //   console.log("props.olor", props.color);
    // }
    return props.color ? props.color : "#333333";
  }};
  line-height: 44px;
  cursor: pointer;
  :last-child {
    margin-right: 0px;
    background-color: #ff9500;
    color: #ffffff;
  }

  &:focus {
    outline: 0;
  }
`;

export const ZeroButton = styled.div`
  cursor: pointer;
  font-family: inherit;
  text-align: center;
  font-size: 16px;
  border-radius: 18px;
  width: 80px;
  height: 44px;
  background-color: #333333;
  line-height: 44px;
  color: #ffffff;
  text-align: left;
  padding-left: 15px;
`;
