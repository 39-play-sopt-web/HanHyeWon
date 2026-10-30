import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Logo = styled(Link)`
  ${({ theme }) => theme.fonts.subtitle}
`

export const Point = styled.span`
  background: ${({ theme }) => theme.colors.pointGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`
