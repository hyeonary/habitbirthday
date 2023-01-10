import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../styles/mediaQueries";

export const Container = styled.section`
  height: 100vh;
  background-color: #fff2d1;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  ${onNotLarge}{
    padding: 100px 20px;
  }
`

export const SubWrapper = styled.div`
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const InputForm = styled.input`
  border-radius: 8px;
  border: none;
  padding: 10px 40px 10px 1.5rem;
  width: 100%;
`

export const Subscribe = styled.button`
  background-color: #FF6CB3;
  border: none;
  border-radius: 10px;
  color: #fff2d1;
  font-size: 13px;
  line-height: 120%;
  font-weight: 700;
  padding: 12px 30px;
  cursor: pointer;
`

export const HBDLogo = styled.img`
  width: 300px;
  margin-bottom: 70px;

`