import styles from './Pricing.module.css'

const PLANS = [
  {
    id: 'plan-all',
    featured: true,
    name: 'Gói tập một tháng',
    nameStrong: 'Tất cả chi nhánh',
    price: '399.000',
    desc: 'Hội viên có thể tập luyện tại bất kỳ chi nhánh nào của Ignite Fitness trên toàn quốc, tận hưởng tất cả đặc quyền và nhiều hơn thế nữa.',
  },
  {
    id: 'plan-single',
    featured: false,
    name: 'Gói tập một tháng',
    nameStrong: '1 chi nhánh',
    price: '299.000',
    desc: 'Lựa chọn tiết kiệm nhất, dành cho Hội viên có nhu cầu tập luyện cố định tại một địa điểm thuận tiện gần nhà hoặc nơi làm việc.',
  },
]

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <h2 className="section-title">Gói Hội Viên</h2>
        <p className="section-sub">Lựa chọn gói tập phù hợp với nhu cầu và ngân sách của bạn</p>

        {/* Bootstrap grid: 1 col mobile, 2 col md+ */}
        <div className="row g-3 justify-content-center mb-4">
          {PLANS.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6" style={{ maxWidth: '420px' }}>
              <div
                id={plan.id}
                className={`${styles.card} ${plan.featured ? styles.featured : ''} h-100`}
              >
                <div className={styles.cardInner}>
                  <h3 className={styles.planName}>
                    {plan.name}<br /><strong>{plan.nameStrong}</strong>
                  </h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>{plan.price}</span>
                    <span className={styles.currency}>VNĐ</span>
                    <span className={styles.period}>/Tháng</span>
                  </div>
                  <a
                    href="#"
                    id={`${plan.id}-btn`}
                    className={`${styles.planBtn} ${plan.featured ? styles.planBtnFeatured : styles.planBtnDefault}`}
                  >
                    Tham gia gói →
                  </a>
                  <p className={styles.desc}>{plan.desc}</p>
                  <a href="#" id={`${plan.id}-detail`} className={styles.detail}>Xem chi tiết →</a>
                </div>
                {plan.featured && <div className={styles.deco} />}
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <a href="#" className={styles.compareBtn} id="btn-compare">So sánh gói tập</a>
          <a href="#free-trial" className={styles.compareBtn} id="btn-free-trial-pricing">
            Nhận 7 ngày tập miễn phí
          </a>
        </div>
      </div>
    </section>
  )
}
