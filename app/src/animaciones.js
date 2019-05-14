import { keyframes } from 'styled-components';

export const aparecerDeAbajo = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const carga = valor => keyframes`
  0% {
    width: 0;
    background-color: hsl(0, 100%, 50%);
  }

  100% {
    background-color: hsl(${valor}, 100%, 50%);
    width: ${valor}%;
  }
`;
