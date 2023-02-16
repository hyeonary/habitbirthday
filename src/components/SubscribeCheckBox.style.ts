import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../styles/mediaQueries";

export const Container = styled.div`
	height: 40px;
	margin-bottom: 5px;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const CheckBoxForm = styled.input`
	border: 1px solid #B9BDC7;
	border-radius: 2px;
	width: 18px;
	height: 18px;
	margin-right: 10px;
`

export const Description = styled.div`
	font-weight: 500;
	font-size: 14px;
	line-height: 22px;
	em {
		text-decoration: underline;
		text-underline-offset: 2px;
		cursor: pointer;
	}
`

export const ValidResult = styled.h3`
  font-size: 11px;
  font-weight: 500;
  line-height: 130%;
  margin-top: 1px;
  text-align: left;
  padding-left: 10px;
  color: red;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(44, 44, 44, 0.56);
`;

export const Modal = styled.div`
  width: 425px;
  /* height: 203px; */
  text-align: center;
  background-color: #ffffff;
  border-radius: 6px;
  position: relative;
	padding: 20px 30px;

  h3 {
    font-size: 18px;
		font-weight: 600;
		margin-bottom: 30px;
  }
	

  div {
		word-wrap: break-word;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #222222;
  }

`;

export const CloseButton = styled.button`
	margin-top: 25px;
	width: 100px;
	height: 40px;
	line-height: 40px;
	font-size: 14px;
	background: black;
	font-weight: 600;
	color: white;
	cursor: pointer;
	border: none;
	border-radius: 6px;
`

