import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../styles/mediaQueries";

export const Container = styled.section`
  height: 100vh;
  background-color: #fff2d1;
  display: flex;
  justify-content: center;

  ${onNotLarge} {
    padding: 60px 20px;
  }
`;

export const HBDLogo = styled.img`
  width: 300px;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
  margin-bottom: 50px;
  /* color: #9E9E9E; */
`

export const Descrition = styled.div``;

export const SubscribeWrapper = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormPart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label``;

export const InputForm = styled.input`
  border-radius: 8px;
  border: none;
  padding: 13px 40px 13px 1.5rem;
  width: 100%;
`;

export const ValidResult = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
`;

export const Subscribe = styled.button`
  background-color: #ff6cb3;
  border: none;
  border-radius: 10px;
  color: #fff2d1;
  font-size: 14px;
  line-height: 120%;
  font-weight: 700;
  padding: 17px 30px;
  cursor: pointer;
`;
