const STORAGE_KEY = 'ranking'

export function getRecords() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
}

// 기록 추가
export function saveRecord(record) {
  const records = getRecords()
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...records, record]))
}

// 삭제
export function clearRecords() {
  localStorage.removeItem(STORAGE_KEY)
}
