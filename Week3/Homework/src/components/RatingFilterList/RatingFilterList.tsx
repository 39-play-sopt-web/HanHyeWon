import { RATING_FILTERS, type RatingFilter } from '../../constants/ratingFilter'
import * as S from './RatingFilterList.styles'

interface RatingFilterListProps {
  selectedFilter: RatingFilter
  onSelect: (filter: RatingFilter) => void
}

function RatingFilterList({ selectedFilter, onSelect }: RatingFilterListProps) {
  return (
    <S.Container>
      {RATING_FILTERS.map((filter) => (
        <S.FilterButton
          key={filter.label}
          $isActive={filter.label === selectedFilter.label}
          onClick={() => onSelect(filter)}
        >
          {filter.label}
        </S.FilterButton>
      ))}
    </S.Container>
  )
}

export default RatingFilterList
