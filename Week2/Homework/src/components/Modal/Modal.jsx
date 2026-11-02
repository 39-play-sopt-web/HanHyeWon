import { createPortal } from 'react-dom'
import * as S from './Modal.styles'

function Modal({ time, onClose }) {
  return createPortal(
    <S.Overlay>
      <S.Box>
        <S.Title>🎉 게임 종료!</S.Title>
        <S.Message>걸린 시간: {time.toFixed(2)}초</S.Message>
        <S.Button onClick={onClose}>확인</S.Button>
      </S.Box>
    </S.Overlay>,
    document.getElementById('modal-root')
  )
}

export default Modal
