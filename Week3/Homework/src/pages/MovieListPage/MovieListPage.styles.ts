import styled from 'styled-components'

export const Title = styled.h2`
  margin-bottom: 20px;
  ${({ theme }) => theme.fonts.title}
`

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 20px;
`

export const Message = styled.p`
  padding: 20px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`
