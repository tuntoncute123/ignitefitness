import styles from './MarqueeBar.module.css'

export default function MarqueeBar() {
  const text = 'GYM CHO MỌI NGƯỜI \u00a0★\u00a0 '
  const repeated = text.repeat(12)

  return (
    <div className={styles.bar} aria-hidden="true">
      <div className={styles.track}>
        <span>{repeated}{repeated}</span>
      </div>
    </div>
  )
}
