import styled from '@emotion/styled'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 48px;
  border-radius: 16px;
  background: white;
`

export const Title = styled.h2`
  font-size: 20px;
`

export const Message = styled.p`
  color: #555;
`

export const Button = styled.button`
  margin-top: 8px;
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  background: #a8e063;
  font-weight: 700;
  cursor: pointer;
`
