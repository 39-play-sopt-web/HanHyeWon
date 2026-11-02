import styled from '@emotion/styled'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 12px 24px;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
`

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`

export const TabButton = styled.button`
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? '#d4f5a3' : 'transparent')};
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
`

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`

export const Select = styled.select`
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 13px;
`

export const Timer = styled.span`
  min-width: 56px;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
`
