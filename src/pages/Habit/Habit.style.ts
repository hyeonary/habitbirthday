import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../styles/mediaQueries";

export const Container = styled.section`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  padding-top: 109px;

  ${onNotLarge} {
    padding: 60px 24px 0 24px;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 40px;
`;

export const Logo = styled.div`
  margin-bottom: 28px;

  img {
    width: 450px;
  }

  ${onNotLarge}{
    margin-bottom: 37px;
    img {
      width: 288px;
    }
  }

`

export const Dingul = styled.div`
  margin-bottom: 28px;
  img {
    width: 115px;
  }
  ${onNotLarge}{
    margin-bottom: 32px;
  }
`

export const Content = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  margin-bottom: 30px;
  ${onNotLarge}{
    margin-bottom: 23px;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
  }
`

export const Descrition = styled.div``;

export const SubscribeWrapper = styled.div`
  width: 500px;
  margin-bottom: 50px;
  ${onNotLarge}{
    width: 100%;
      /* margin-bottom: 50px; */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;
  /* gap: 15px; */
`;

export const DigulInsta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: 13.7255px;
  line-height: 130%;
  color: #777777;
  text-align: center;
  margin-top: 54px;
    /* margin-bottom: 50px; */

  img {
    cursor: pointer;
    margin-top: 16px;
    width: 50px;
  }

  ${onNotLarge}{
    margin-top: 51px;
    img {
    margin-top: 11px;
  }
  }
`

export const ValidResult = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
`;

export const Subscribe = styled.button`
  background-color: #ff6cb3;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  padding: 16px 30px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  ${onNotLarge}{
    width: 100%;
    font-size: 15px;
    line-height: 150%;
  }
`;

export const SuccessContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 84px 0;

  ${onNotLarge} {
    padding: 50px 24px;
  }
`

export const SuccessWrapper = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
`

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
	/* margin-bottom: 31px; */
  
  ${onNotLarge}{
    font-size: 15px;
  }	
`

export const Share = styled.button`

`