import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../styles/mediaQueries";

export const Container = styled.div`
  height: 100vh;
  position: relative;
  /* background-color: #FBF7F2; */
`;

export const Content = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  gap: 80px;
  justify-content: center;
  ${onNotLarge}{
    padding-top: 30px;
    padding-bottom: 80px;
    flex-direction: column;
    gap: 0;
  }
`;

export const Introduce = styled.div`
  width: 480px;
`

export const Title = styled.h1`
  font-size: 40px;
  padding: 3px 2px;
  margin-bottom: 40px;
  text-align: left;
  width: 100%;
  ${onNotLarge}{
    font-size: 28px;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const span = styled.span`
  position: absolute;
`

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  padding: 3px 2px;
  text-align: left;
  width: 100%;
  color: rgb(33, 37, 41);
  font-weight: 500;

  em {
    font-weight: 600;
    color: rgba(193, 76, 138, 1);
  }

  ${onNotLarge}{
    text-align: center;
    font-size: 14px;
  }
`

const rotation = keyframes`
  0% {
		transform : rotate(-10deg)
	}

	50% {
		transform : rotate(10deg)
	}

	100% {
		transform : rotate(-10deg)
	}
`;

export const Habit = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 30px;
  img {
    width: 124px;
    animation: ${rotation} 1.5s linear infinite;
  }
`
export const SubscribeTab = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  color: white;
  background-color: rgba(193, 76, 138, 1);
  opacity: 0.9;
  bottom: 0;
  span {
    font-weight: 600;
    font-size: 16px;
  }
`

export const IntroduceImg = styled.img`
  width: 44%;
  ${onNotLarge}{
    margin-bottom: 15px;
    width: 65%;
    max-width: 235px;
  }
`

export const CTA = styled.div`
  cursor: pointer;
  width: 250px;
  padding: 15px 10px;
  font-weight: 700;
  font-size: 15 px;
  color: rgb(255, 255, 255);
  line-height: 22px;
  border-radius: 115px;
  border: none;
  background-color: rgba(193, 76, 138, 1);
  margin-top: 20px;
  transition: all 0.2s ease 0s;
 
  :hover{
    transform: translate(0px, -5px);
    box-shadow: rgb(0 0 0 / 20%) 0px 6px 7px;
  }
`