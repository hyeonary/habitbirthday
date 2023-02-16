import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../styles/mediaQueries";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 84px 0;

  ${onNotLarge} {
    padding: 50px 24px;
  }
`;

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
`

export const Logo = styled.div`
  margin-bottom: 23px;
  display: flex;
  justify-content: baseline;
  img {
    width: 182px;
  }

  ${onNotLarge}{
    justify-content: center;
    img {
      width: 165px;
    }
  }
  
  
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  text-align: left;
  margin-bottom: 32px;
  ${onNotLarge}{
    font-size: 30px;
    line-height: 140%;
  }
`

export const Desc = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-align: left;
  margin-bottom: 36px;
  em{
    font-weight: 700;
  }
  ${onNotLarge}{
    font-size: 14px;
    margin-bottom: 25px;
  }
`

export const Content = styled.div`
  font-size: 14px;
  
  line-height: 150%;
  text-align: left;
  margin-bottom: 50px;
  /* color: rgb(96, 109, 123); */
  /* color: #9E9E9E; */
  em {
    font-weight: 600;
  }
`

export const SubscribeWrapper = styled.div`
  width: 450px;
  ${onNotLarge}{
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormPart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subscribe = styled.button`
  background-color: #222222;
  border: none;
  border-radius: 6px;
  padding: 16px 30px;
  cursor: pointer;

  span {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const Welcome = styled.div`
  margin-top: 172px;
  margin-bottom: 32px;
  img {
    width: 296.59px;
  }
  ${onNotLarge}{
    margin-top: 117px;
    margin-bottom: 26px;
  }
`

export const Headline = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 157.5%;
  text-align: center;
	margin-bottom: 50px;
  
  ${onNotLarge}{
    font-size: 16px;
  }	
`

export const SuccessWrapper = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
`

export const HabitInstagram = styled.div`
  width: 263px;
  height: 50px;
  background: #222222;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #FFFFFF;
  }
  img {
    width: 26px;
    height: 26px;
  }
`