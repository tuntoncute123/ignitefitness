import styles from './AppSection.module.css'

export default function AppSection() {
  return (
    <section className={styles.section} id="app">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              ỨNG DỤNG<br />IGNITE FITNESS
            </h2>
            <p className={styles.desc}>
              Với ứng dụng Ignite Fitness, việc tập luyện trở nên đơn giản hơn.
              Từ đăng ký gói tập, xem lịch các lớp tập nhóm đến theo dõi chỉ số sức khoẻ.
            </p>
            <a href="#" className="btn btn-blue" id="btn-download-app">Tải ứng dụng →</a>
            <div className={styles.storeLinks}>
              <a href="#" className={styles.storeBtn} id="btn-appstore">
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a href="#" className={styles.storeBtn} id="btn-googleplay">
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M3.18 23.76c.35.19.74.24 1.13.14L14.89 12 11 8.11 3.18 23.76zM20.87 10.42l-2.83-1.59-3.56 3.17 3.56 3.17 2.87-1.61c.82-.46.82-1.68-.04-2.14zM2.29.36C2.1.57 2 .88 2 1.27v21.46c0 .39.1.7.29.91L2.42 23.7l12.01-12.01v-.38L2.42.22 2.29.36zM14.89 12L4.31 1.1c-.39-.1-.78-.05-1.13.14L14.89 12z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
          <div className={styles.mockup}>
            <img src="/images/mobile_app.png" alt="Ứng dụng Ignite Fitness" />
          </div>
        </div>
      </div>
    </section>
  )
}
