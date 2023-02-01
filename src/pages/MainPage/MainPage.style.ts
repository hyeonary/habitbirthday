import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../styles/mediaQueries";

export const Container = styled.div`
  height: 100vh;
  position: relative;

`;

export const Content = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  ${onNotLarge}{
    padding-top: 30px;
    padding-bottom: 80px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  padding: 3px 2px;
  margin-bottom: 40px;
  text-align: left;
  width: 100%;
  ${onNotLarge}{
    font-size: 32px;
  }
`

export const span = styled.span`
  position: absolute;
`

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.5;
  padding: 3px 2px;
  text-align: left;
  width: 100%;

  em {
    font-weight: 600;
    color: rgba(193, 76, 138, 1);
  }
`

export const Habit = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 30px;
  img {
    width: 124px;
  }
`
export const SubscribeTab = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: white;
  background-color: rgba(193, 76, 138, 1);
  opacity: 0.9;
  bottom: 0;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`