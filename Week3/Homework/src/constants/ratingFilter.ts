export interface RatingFilter {
  label: string
  min?: number
  max?: number
}

export const RATING_FILTERS: RatingFilter[] = [
  { label: '전체' },
  { label: '9점 이상', min: 9 },
  { label: '8 ~ 9점', min: 8, max: 9 },
  { label: '7 ~ 8점', min: 7, max: 8 },
  { label: '6 ~ 7점', min: 6, max: 7 },
  { label: '6점 미만', max: 6 },
]
