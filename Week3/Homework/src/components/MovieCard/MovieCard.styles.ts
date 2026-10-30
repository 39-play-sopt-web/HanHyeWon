import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled(Link)`
  display: block;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  }
`

export const PosterWrapper = styled.div`
  position: relative;
  aspect-ratio: 2 / 3;
  background: ${({ theme }) => theme.colors.border};
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Rating = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.pointGradient};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
`

export const Title = styled.h3`
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ReleaseDate = styled.p`
  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.point};
`

export const Overview = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 4px;
  ${({ theme }) => theme.fonts.caption}
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
`
