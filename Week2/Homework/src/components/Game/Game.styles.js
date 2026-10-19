import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
const flash = keyframes`
  0% {
    background: #d4f5a3;
    transform: scale(0.9);
  }
  100% {
    background: white;
    transform: scale(1);
  }
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 16px;
`

export const NextNumber = styled.p`
  font-size: 14px;
  color: #555;

  strong {
    margin: 0 4px;
    font-size: 24px;
    color: #111;
  }
`

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ boardSize }) => boardSize}, 80px);
  gap: 8px;
`

export const Cell = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
   animation: ${flash} 0.3s ease-out;

  &:active {
    background: #d4f5a3;
    border-color: #a8e063;
  }

  &:disabled {
    background: #f5f5f5;
    cursor: default;
  }
`

