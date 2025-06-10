import React from "react";
import { keyframes, styled } from "styled-components";

const FadeAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const FadeIn = styled.div`
  animation: ${FadeAnimation} 2000ms linear;
`;

export default FadeIn;
