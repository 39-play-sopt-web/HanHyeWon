import styled from '@emotion/styled'

export const Container = styled.section`
  max-width: 720px;
  margin: 48px auto;
  padding: 24px;
  border-radius: 16px;
  background: white;
  border: 1px solid #eee;

`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  font-size: 18px;
`

export const ResetButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background: #ff6b6b;
  color: white;
  font-size: 13px;
  cursor: pointer;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  text-align: center;

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  th {
    color: #888;
    font-weight: 500;
  }
`

export const Empty = styled.p`
  padding: 48px 0;
  color: #999;
  text-align: center;
`
