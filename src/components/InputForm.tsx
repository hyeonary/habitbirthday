import styled, { keyframes } from "styled-components";
import useMatchScreenSize from "../hooks/useMatchScreenSize";
import { onNotLarge } from "../styles/mediaQueries";

const Container = styled.div`
  height: 70px;
`;

const CustomInput = styled.input.attrs({
  placeholderTextColor: '#686868'
})`
  border: 1px solid #B9BDC7;
  border-radius: 6px;
  padding: 12px 40px 12px 17px;
  width: 500px;
  font-size: 14px;
  :focus {
    outline: none !important; 
    border-color: black;
  } 
  ${onNotLarge}{
    width: 100%
  }
`;

const ValidResult = styled.h3`
  font-size: 11px;
  font-weight: 500;
  line-height: 130%;
  margin-top: 5px;
  text-align: left;
  padding-left: 10px;
  color: red;
`;

interface InputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  result?: string;
  required?: Boolean;
}

function InputForm({ value, name, onChange, placeholder, result, required }: InputProps) {
  return (
    <Container>
      <CustomInput
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {required && <ValidResult>{result}</ValidResult>}
    </Container>
  );
}

export default InputForm;
