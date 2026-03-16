import { useReveal } from '../../hooks/useReveal'

/**
 * <Reveal> – wrapper that animates children when scrolled into view
 *
 * Props:
 *   direction  – 'up' | 'left' | 'right' | 'fade'  (default: 'up')
 *   delay      – 0-6 (maps to .delay-N class)
 *   as         – HTML element to render (default: 'div')
 *   className  – extra classes
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const [ref, isVisible] = useReveal()

  const classes = [
    `reveal-${direction}`,
    isVisible ? 'is-visible' : '',
    delay > 0 ? `delay-${delay}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
