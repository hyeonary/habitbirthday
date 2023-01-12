import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  position: fixed;
  padding-top: 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  border-bottom: 2px solid #22bb4c;
`;

export const Slogan = styled.div`
  color: #22bb4c;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;

  &:hover,
  &:focus {
    animation-duration: 3s;
    animation-name: rainbowLink;
    animation-iteration-count: infinite;
  }
  @keyframes rainbowLink {
    0% {
      color: #ff2a2a;
    }
    15% {
      color: #ff7a2a;
    }
    30% {
      color: #ffc52a;
    }
    45% {
      color: #43ff2a;
    }
    60% {
      color: #2a89ff;
    }
    75% {
      color: #202082;
    }
    90% {
      color: #6b2aff;
    }
    100% {
      color: #e82aff;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 43px;
  line-height: 100%;
  font-weight: 800;
  text-align: center;
  color: #22bb4c;
  padding: 12px 30px;
  margin-bottom: 10px;
`;

export const Navtab = styled.nav`
  border-top: 2px solid #22bb4c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 48px;
  align-items: center;
  /* padding: */
`;

export const Tab = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 70px;
  li {
    cursor: pointer;
    padding: 4px 0;
    color: #22bb4c;
    font-size: 13pt;
    line-height: 100%;
    font-weight: 400;
    list-style-type: none;
    text-decoration: none;
  }
`;
