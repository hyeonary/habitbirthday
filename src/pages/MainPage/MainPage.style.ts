import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #fff2d1;
`;

export const Content = styled.div`
  padding-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 43px;
  line-height: 100%;
  font-weight: 700;
  text-align: center;
  color: #22bb4c;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const InputForm = styled.input`
  border-radius: 8px;
  border: none;
  padding: 10px 40px 11px 1.5rem;
  width: 100%;
`

export const Subscribe = styled.button`
  background-color: #22bb4c;
  border: none;
  border-radius: 10px;
  color: #fff2d1;
  font-size: 12px;
  line-height: 120%;
  font-weight: 600;
  padding: 10px 30px;
  cursor: pointer;
`

export const CheerUp = styled.button`
  margin-top: 100px;
  margin-bottom: 30px;
  background-color: #22bb4c;
  border: none;
  border-radius: 10px;
  color: #fff2d1;
  font-size: 15px;
  line-height: 130%;
  font-weight: 700;
  padding: 15px 60px;
  cursor: pointer;
  :hover{
    background-color: #fff2d1;
    color: #22bb4c;
    transition: 0.3s;
  }
`

