// Fisher-Yates: 뒤에서부터 앞쪽의 아무 칸과 자리를 바꿔 고르게 섞기
export function shuffle(array) {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}
