import Reveal from '../Reveal/Reveal'
import styles from './Features.module.css'

const FEATURES = [
  {
    id: 'feature-price',
    icon: (
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#E3F7FF"/>
        <path d="M30 12C20.06 12 12 20.06 12 30C12 39.94 20.06 48 30 48C39.94 48 48 39.94 48 30C48 20.06 39.94 12 30 12ZM30 44C22.27 44 16 37.73 16 30C16 22.27 22.27 16 30 16C37.73 16 44 22.27 44 30C44 37.73 37.73 44 30 44Z" fill="#00AEEF"/>
        <path d="M30 20V24M30 36V40M22 30H18M42 30H38" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="5" fill="#F26524"/>
      </svg>
    ),
    title: 'Chi phí tối ưu\nGiá trị vượt trội',
    desc: 'Ignite Fitness tự tin mang lại trải nghiệm tập luyện chất lượng cao với mức chi phí hợp lý nhất cho người Việt.',
  },
  {
    id: 'feature-equipment',
    icon: (
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#E3F7FF"/>
        <rect x="12" y="27" width="36" height="6" rx="3" fill="#00AEEF"/>
        <rect x="8" y="23" width="8" height="14" rx="3" fill="#00AEEF"/>
        <rect x="44" y="23" width="8" height="14" rx="3" fill="#00AEEF"/>
        <rect x="4" y="25" width="6" height="10" rx="2" fill="#F26524"/>
        <rect x="50" y="25" width="6" height="10" rx="2" fill="#F26524"/>
      </svg>
    ),
    title: 'Trang thiết bị\nđa dạng và hiện đại',
    desc: 'Cung cấp đầy đủ các loại máy tập cardio và tạ hiện đại, trong không gian sạch sẽ và thoải mái để bạn bứt phá mọi giới hạn.',
  },
  {
    id: 'feature-branches',
    icon: (
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#E3F7FF"/>
        <path d="M30 10C22.27 10 16 16.27 16 24C16 33 30 50 30 50C30 50 44 33 44 24C44 16.27 37.73 10 30 10Z" fill="#00AEEF"/>
        <circle cx="30" cy="24" r="6" fill="white"/>
      </svg>
    ),
    title: 'Hơn 15 chi nhánh trên\ntoàn quốc',
    desc: 'Với hơn 15 chi nhánh trải dài khắp các thành phố lớn, Ignite Fitness luôn sẵn sàng đồng hành cùng bạn trên mọi hành trình.',
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <Reveal direction="up">
          <h2 className={styles.heading}>NƠI BẠN CẢM THẤY THUỘC VỀ</h2>
        </Reveal>

        {/* Bootstrap: 1 col xs, 2 col sm, 3 col lg */}
        <div className="row g-3 justify-content-center">
          {FEATURES.map((f, i) => (
            <div key={f.id} className="col-12 col-sm-6 col-lg-4">
              <Reveal direction="up" delay={i + 1}>
                <div id={f.id} className={styles.card}>
                  <div className={styles.icon}>{f.icon}</div>
                  <h3 className={styles.name}>
                    {f.title.split('\n').map((line, idx2) => (
                      <span key={idx2}>{line}<br /></span>
                    ))}
                  </h3>
                  <p className={styles.desc}>{f.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
