export interface RatingFilter {
  label: string
  min?: number
  max?: number
}

// TMDB의 lte는 경계값을 포함해서, max를 x.999로 줘야 경계 점수가 두 필터에 겹치지 않음
export const RATING_FILTERS: RatingFilter[] = [
  { label: '전체' },
  { label: '9점 이상', min: 9 },
  { label: '8 ~ 9점', min: 8, max: 8.999 },
  { label: '7 ~ 8점', min: 7, max: 7.999 },
  { label: '6 ~ 7점', min: 6, max: 6.999 },
  { label: '6점 미만', max: 5.999 },
]
