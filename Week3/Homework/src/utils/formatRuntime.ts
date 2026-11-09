// 94 -> '1시간 34분', 45 -> '45분'
export const formatRuntime = (runtime: number) => {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  if (hours === 0) return `${minutes}분`

  return `${hours}시간 ${minutes}분`
}
