import styled, { keyframes } from "styled-components";

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Container = styled.div`
  display: inline-block;
  width: 300px;
  height: 2.5rem;
  animation: ${skeletonKeyframes} 1s ease-in-out infinite;
  background-color: #FFF;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
`;