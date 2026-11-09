// '2026-09-16' -> '2026년 9월 16일'
export const formatDate = (date: string) => {
  if (!date) return '개봉일 미정'

  const [year, month, day] = date.split('-').map(Number)
  return `${year}년 ${month}월 ${day}일`
}
