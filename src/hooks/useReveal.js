import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — triggers a CSS class when element enters viewport
 * @param {object} options – IntersectionObserver options
 * @returns [ref, isVisible]
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const root = options.root ?? null
  const rootMargin = options.rootMargin ?? '0px 0px -60px 0px'
  const threshold = options.threshold ?? 0.15

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
      { root, rootMargin, threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [root, rootMargin, threshold])

  return [ref, isVisible]
}
