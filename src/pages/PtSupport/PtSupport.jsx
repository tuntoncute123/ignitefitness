import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './PtSupport.module.css'
import Reveal from '../../components/Reveal/Reveal'
import BranchFinder from '../../components/BranchFinder/BranchFinder'

const REASONS = [
  'Giúp bạn đặt mục tiêu tập luyện',
  'Tư vấn lộ trình giảm hoặc tăng cân',
  'Điều chỉnh kỹ thuật khi tập luyện',
  'Hướng dẫn dinh dưỡng tập luyện',
  'Động viên và khích lệ tinh thần',
  'Thời gian linh hoạt theo lựa chọn',
]

export default function PtSupport() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal direction="up">
            <h1 className={styles.heroTitle}>HƯỚNG DẪN TẬP LUYỆN MIỄN PHÍ</h1>
            <p className={styles.heroSub}>
              Nhận tối đa quyền lợi của bạn cùng các chương trình tập luyện miễn phí.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.splitGrid}>
            <Reveal direction="left">
              <article className={styles.textCard}>
                <h2>PHƯƠNG PHÁP TẬP LUYỆN</h2>
                <p>
                  Đội ngũ huấn luyện viên tại The New Gym được tuyển chọn và sàng lọc kỹ lưỡng qua các tiêu chí về chuyên môn, kinh nghiệm và khả năng đào tạo.
                </p>
                <p>
                  Hội viên có thể tự tin bứt phá giới hạn bản thân, đồng thời lựa chọn huấn luyện viên cá nhân phù hợp theo trình độ, thế mạnh và mục tiêu tập luyện.
                </p>
              </article>
            </Reveal>

            <Reveal direction="right">
              <img
                className={styles.imageCard}
                src="https://thenewgym.vn/wp-content/uploads/2025/09/doi-ngu-pt-tai-he-thong-the-new-gym-1-1.webp"
                alt="Đội ngũ huấn luyện viên The New Gym"
              />
            </Reveal>
          </div>

          <div className={`${styles.splitGrid} ${styles.reverse}`}>
            <Reveal direction="left">
              <img
                className={styles.imageCard}
                src="https://thenewgym.vn/wp-content/uploads/2025/09/pt-chia-se-chi-so-co-the-1.webp"
                alt="Chế độ dinh dưỡng cùng PT"
              />
            </Reveal>

            <Reveal direction="right">
              <article className={styles.textCard}>
                <h2>CHẾ ĐỘ DINH DƯỠNG</h2>
                <p>
                  Tập luyện cùng PT không chỉ là các bài vận động cơ thể, mà còn là quá trình hiểu về dinh dưỡng và cách chế độ ăn ảnh hưởng trực tiếp đến kết quả tập luyện.
                </p>
                <p>
                  Bạn được hướng dẫn cách ăn uống, lựa chọn thực phẩm và cân đối khẩu phần để đạt mục tiêu nhanh hơn, hiệu quả hơn và bền vững hơn.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.reasonSection}>
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.reasonTitle}>LÝ DO CẦN CÓ HUẤN LUYỆN VIÊN CÁ NHÂN</h2>
          </Reveal>

          <div className={styles.reasonGrid}>
            {REASONS.map((reason, index) => (
              <Reveal key={reason} direction="up" delay={(index % 3) + 1}>
                <article className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>{String(index + 1).padStart(2, '0')}</div>
                  <h3>{reason}</h3>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={2}>
            <div className={styles.ctaWrap}>
              <Link to="/tham-gia" className={styles.ctaBtn}>Tham gia ngay</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.heroBottom}>
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.heroBottomTitle}>HƯỚNG DẪN TẬP LUYỆN MIỄN PHÍ</h2>
            <p className={styles.heroBottomSub}>
              Nhận tối đa quyền lợi của bạn cùng các chương trình tập luyện miễn phí.
            </p>
          </Reveal>
        </div>
      </section>

      <BranchFinder />
    </main>
  )
}
