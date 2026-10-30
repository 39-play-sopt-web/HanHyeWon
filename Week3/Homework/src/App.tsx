import styled from 'styled-components'

function App() {
  return <Title>PLAY SOPT MOVIE</Title>
}

const Title = styled.h1`
  ${({ theme }) => theme.fonts.title}
  color: ${({ theme }) => theme.colors.point};
`

export default App
