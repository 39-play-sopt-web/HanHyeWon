import { useEffect, useRef } from 'react'

export const useIntersectionObserver = (onIntersect: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = ref.current
    if (!target) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) onIntersect()
    })
    observer.observe(target)

    return () => observer.disconnect()
  }, [onIntersect])

  return ref
}
