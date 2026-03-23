import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal — revela elementos conforme entram na viewport.
 *
 * Uso:
 *   const [ref, visible] = useScrollReveal()
 *   <div ref={ref} className={visible ? styles.visible : styles.hidden}>...</div>
 *
 * @param {number} threshold  — % do elemento visível para disparar (0–1, default 0.15)
 * @param {boolean} once      — revela apenas uma vez (default true)
 */
export function useScrollReveal(threshold = 0.15, once = true) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, visible]
}
