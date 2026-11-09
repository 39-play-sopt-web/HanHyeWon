import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.point};
`

export const Hero = styled.div<{ $backdrop: string }>`
  display: flex;
  gap: 32px;
  padding: 32px;
  border-radius: 12px;
  background-image: linear-gradient(90deg, rgba(24, 24, 29, 0.95), rgba(24, 24, 29, 0.6))
    ${({ $backdrop }) => $backdrop && `, url(${$backdrop})`};
  background-size: cover;
  background-position: center;
`

export const PosterWrapper = styled.div`
  flex-shrink: 0;
  width: 200px;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.border};
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.title}
`

export const MetaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray};
`

export const Rating = styled.span`
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.pointGradient};
`

export const Status = styled.span`
  padding: 2px 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
`

export const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Genre = styled.li`
  padding: 4px 12px;
  border-radius: 999px;
  ${({ theme }) => theme.fonts.caption}
  background: ${({ theme }) => theme.colors.surface};
`

export const Section = styled.section`
  margin-top: 40px;
`

export const SectionTitle = styled.h3`
  margin-bottom: 12px;
  ${({ theme }) => theme.fonts.subtitle}
`

export const Overview = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.gray};
`

export const InfoList = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
`

export const InfoItem = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
`

export const InfoLabel = styled.dt`
  margin-bottom: 6px;
  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray};
`

export const InfoValue = styled.dd`
  font-size: 14px;
  font-weight: 700;
`

export const Message = styled.p`
  padding: 20px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`
