// '2026-09-16' -> '2026년 9월 16일'
export const formatDate = (date: string) => {
  const [year, month, day] = date.split('-').map(Number)
  return `${year}년 ${month}월 ${day}일`
}
