import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../styles/mediaQueries";

const Container = styled.div`
  height: 70px;
`;

const CustomInput = styled.input`
  border-radius: 8px;
  border: none;
  padding: 13px 40px 13px 1.5rem;
  width: 100%;
  :focus {
    outline: none !important; 
    border-color: #d6a8e9;
    box-shadow: 0 0 5px #d6a8e9;
  }
`;

const ValidResult = styled.h3`
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
  margin-top: 10px;
  text-align: left;
  padding-left: 10px;
  color: #FF6CB3;
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
