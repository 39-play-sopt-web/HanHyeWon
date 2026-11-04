import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`

export const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 6px 14px;
  border-radius: 999px;
  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.background : theme.colors.white)};
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors.pointGradient : theme.colors.surface)};
`
