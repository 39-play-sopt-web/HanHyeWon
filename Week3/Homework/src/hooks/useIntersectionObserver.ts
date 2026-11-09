import { useEffect, useRef } from 'react'

// 대상 요소가 화면에 보이면 onIntersect 실행 (enabled가 false면 감지하지 않음)
export const useIntersectionObserver = (onIntersect: () => void, enabled: boolean) => {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target || !enabled) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) onIntersect()
    })
    observer.observe(target)

    return () => observer.disconnect()
  }, [onIntersect, enabled])

  return targetRef
}
