import { useState } from 'react'
import { getRecords, clearRecords } from '../../utils/storage'

function sortRecords(records) {
  return [...records].sort((a, b) => {
    if (a.level !== b.level) return b.level - a.level
    return a.time - b.time
  })
}

function Ranking() {
  const [records, setRecords] = useState(() => sortRecords(getRecords()))

  function handleReset() {
    clearRecords()
    setRecords([])
  }

  return (
    <section>
      <div>
        <h2>랭킹</h2>
        <button onClick={handleReset}>초기화</button>
      </div>

      {records.length === 0 ? (
        <p>아직 기록이 없어요</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>순위</th>
              <th>레벨</th>
              <th>플레이 시간</th>
              <th>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Level {record.level}</td>
                <td>{record.time.toFixed(2)}초</td>
                <td>{record.playedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

export default Ranking
