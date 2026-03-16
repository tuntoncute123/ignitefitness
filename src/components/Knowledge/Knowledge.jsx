import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal'
import styles from './Knowledge.module.css'

const ARTICLES = [
  {
    id: 'kb-1',
    tag: 'Tập luyện',
    color: 'linear-gradient(135deg, #00AEEF, #0088cc)',
    title: '5 bài tập cardio hiệu quả nhất cho người mới bắt đầu',
    desc: 'Khám phá những bài tập cardio phù hợp nhất để bắt đầu hành trình fitness của bạn...',
  },
  {
    id: 'kb-2',
    tag: 'Dinh dưỡng',
    color: 'linear-gradient(135deg, #F26524, #d44e0e)',
    title: 'Chế độ ăn uống tối ưu để tăng cơ và giảm mỡ',
    desc: 'Tìm hiểu về cách kết hợp protein, carb và chất béo để đạt được body hoàn hảo...',
  },
  {
    id: 'kb-3',
    tag: 'Phục hồi',
    color: 'linear-gradient(135deg, #2c3e50, #4a6fa5)',
    title: 'Tại sao nghỉ ngơi cũng quan trọng không kém việc tập luyện',
    desc: 'Hiểu rõ tầm quan trọng của giấc ngủ và ngày nghỉ trong quá trình xây dựng cơ bắp...',
  },
]

export default function Knowledge() {
  return (
    <section className={styles.section} id="knowledge">
      <div className="container">
        <Reveal direction="up">
          <h2 className="section-title">Kiến Thức Tập Luyện</h2>
          <p className="section-sub">
            Cập nhật những kiến thức tập luyện và dinh dưỡng mới nhất từ đội ngũ chuyên gia
          </p>
        </Reveal>

        {/* Bootstrap: 1 col xs, 2 col sm, 3 col lg */}
        <div className="row g-3">
          {ARTICLES.map((a, i) => (
            <div key={a.id} className="col-12 col-sm-6 col-lg-4">
              <Reveal direction="up" delay={i + 1}>
                <article id={a.id} className={`${styles.card} h-100`}>
                  <div className={styles.thumb} style={{ background: a.color }}>
                    <span className={styles.tag}>{a.tag}</span>
                  </div>
                  <div className={styles.body}>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                    <Link to="/tin-tuc" id={`${a.id}-link`} className={styles.link}>Đọc thêm →</Link>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

