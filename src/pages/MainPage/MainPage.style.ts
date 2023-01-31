import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  position: relative;

`;

export const Content = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 40px;
  padding: 3px 2px;
  margin-bottom: 40px;
  text-align: left;
  width: 708px;
`

export const span = styled.span`
  position: absolute;
`

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.5;
  padding: 3px 2px;
  text-align: left;
  width: 708px;

  em {
    font-weight: 600;
    color: rgba(193, 76, 138, 1);
  }
`

export const Habit = styled.div`
  width: 708px;
  text-align: left;
  margin-bottom: 30px;
  img {
    width: 124px;
  }
`