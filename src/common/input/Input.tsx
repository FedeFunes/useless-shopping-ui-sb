import styled from "styled-components";

import { fontSizeSmaller } from "lib/theme";

const Input = styled.input`
  border-radius: 4px;
  ${fontSizeSmaller}
  padding: 10px;
  border: 1px solid #888888;
  background-color: #f9f9f9;
  color: #4a4a4a;
  outline: none;

  /* Hide number arrows */
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
