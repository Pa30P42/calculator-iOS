import styled from "styled-components";

export const UpperResult = styled.div`
  font-size: 0.75em;
  line-height: 1;
  opacity: 0.4;
  text-align: right;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25em;
  min-height: 1em;
`;

export const Expression = styled.span`
  margin-left: auto;
`;

export const Value = styled.div`
  font-size: 2.5em;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  color: #fff;
  padding: 1.2em 1em;
`;
