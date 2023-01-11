import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../styles/mediaQueries";

const Container = styled.div``;

const CustomInput = styled.input`
  border-radius: 8px;
  border: none;
  padding: 13px 40px 13px 1.5rem;
  width: 100%;
`;

const ValidResult = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  margin-top: 3px;
`;

interface InputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  result?: string;
}

function InputForm({ value, name, onChange, placeholder, result }: InputProps) {
  return (
    <Container>
      <CustomInput
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ValidResult>{result}</ValidResult>
    </Container>
  );
}

export default InputForm;
