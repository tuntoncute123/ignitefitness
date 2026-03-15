import styles from './FreeTrial.module.css'

export default function FreeTrial() {
  return (
    <section className={styles.section} id="free-trial">
      <div className={`container ${styles.container}`}>
        <div className={styles.imgWrap}>
          <img src="/images/gym_trainer.png" alt="Personal trainer Ignite Fitness" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            7 NGÀY TẬP LUYỆN<br />MIỄN PHÍ
          </h2>
          <p className={styles.desc}>
            Ignite Fitness tặng bạn một tuần trải nghiệm miễn phí, với tinh thần "Gym cho mọi người"
            giúp Hội viên có thể bắt đầu tập luyện một cách tự tin.
          </p>
          <a href="#" className="btn btn-outline-blue" id="btn-free-trial-detail">
            Xem chi tiết →
          </a>
        </div>
      </div>
    </section>
  )
}
