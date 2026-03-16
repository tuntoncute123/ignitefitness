import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — triggers a CSS class when element enters viewport
 * @param {object} options – IntersectionObserver options
 * @returns [ref, isVisible]
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el) // trigger only once
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
