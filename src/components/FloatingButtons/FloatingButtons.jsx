import styles from './FloatingButtons.module.css'

export default function FloatingButtons() {
  return (
    <div className={styles.wrap} id="floating-btns">
      <a href="tel:19001234" className={`${styles.btn} ${styles.phone}`} id="float-phone" aria-label="Gọi điện">
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>

      <a href="https://zalo.me/" target="_blank" rel="noreferrer"
         className={`${styles.btn} ${styles.zalo}`} id="float-zalo" aria-label="Zalo">
        <span className={styles.zaloText}>Z</span>
      </a>

      <a href="https://m.me/" target="_blank" rel="noreferrer"
         className={`${styles.btn} ${styles.messenger}`} id="float-messenger" aria-label="Messenger">
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
          <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.626 0 12-4.975 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
        </svg>
      </a>
    </div>
  )
}
