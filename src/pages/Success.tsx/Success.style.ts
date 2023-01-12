import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../styles/mediaQueries";

export const Container = styled.section`
	height: 100vh;
  background-color: #fff2d1;
  display: flex;
	flex-direction: column;
  /* justify-content: center; */
	align-items: center;
  padding: 60px 20px;
`

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	height: 100%;
`

export const HBDLogo = styled.img`
  width: 300px;
`;

export const Headline = styled.h3`
	font-size: 15px;
	font-weight: 600;
	line-height: 130%;
	text-align: center;
`