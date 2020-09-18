import { keyframes, css } from 'styled-components'

export const easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)'
}

export const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`
export const messageBoxShadow = css`
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`

export const iconSpin = keyframes`
  0% {
     transform: rotate(0deg);
  }
  100% {
     transform: rotate(360deg);
  }
`

export const modalOpenAnimate = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0,0);
  }
  100% {
    opacity: 0;
    transform: scale(1,1);
    transform-origin: center;
  }
`

export const modalCloseAnimate = keyframes`
  0% {
    opacity: 0;
    transform: scale(1,1);
    transform-origin: center;
  }
  100% {
    opacity: 0;
    transform: scaleY(0,0);
  }
`
