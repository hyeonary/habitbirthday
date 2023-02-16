import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../../styles/mediaQueries";

export const Container = styled.section`
  background-color: #FFF8EB;
	padding: 68px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	${onNotLarge}{
		padding: 85px 24px 67px 24px;
	}
`

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
`

export const Heading = styled.h1`
	font-weight: 700;
	font-size: 36px;
	line-height: 130%;
	text-align: left;

	${onNotLarge}{
		padding-left: 12px;
		font-size: 30px;
		line-height: 140%;
	}

`

export const Logo = styled.div`
	img {
		width: 342px;
	}
	margin-bottom: 40px;
	${onNotLarge}{
		img {
			width: 264px;
		}
		display: flex;
		justify-content: center;
	}
`

export const Desc = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 157.5%;
	text-align: left;
	em {
		font-weight: 700;
	}
	${onNotLarge}{
		font-weight: 500;
		font-size: 14px;
		
	}
`