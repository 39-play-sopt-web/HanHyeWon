import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  padding: 16px 24px;
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
