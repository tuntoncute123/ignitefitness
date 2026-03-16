import { Link } from 'react-router-dom'
import styles from './CtaSection.module.css'

const CARDS = [
  {
    id: 'cta-find', to: '/#branches', label: 'Tìm phòng tập gần bạn',
    icon: (<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <circle cx="22" cy="22" r="14" stroke="#00AEEF" strokeWidth="3" fill="none"/>
      <path d="M33 33L42 42" stroke="#00AEEF" strokeWidth="3" strokeLinecap="round"/>
    </svg>),
  },
  {
    id: 'cta-membership', to: '/#pricing', label: 'Khám phá gói hội viên',
    icon: (<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <path d="M8 28C8 20.27 14.27 14 22 14H26C33.73 14 40 20.27 40 28" stroke="#00AEEF" strokeWidth="3" fill="none"/>
      <circle cx="16" cy="32" r="4" fill="#00AEEF"/>
      <circle cx="32" cy="32" r="4" fill="#00AEEF"/>
      <circle cx="24" cy="20" r="5" fill="#00AEEF"/>
    </svg>),
  },
  {
    id: 'cta-space', to: '/#features', label: 'Không gian tập luyện',
    icon: (<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <rect x="10" y="18" width="28" height="20" rx="3" stroke="#00AEEF" strokeWidth="3" fill="none"/>
      <path d="M18 18V14C18 11.8 19.8 10 22 10H26C28.2 10 30 11.8 30 14V18" stroke="#00AEEF" strokeWidth="3" fill="none"/>
      <path d="M18 28H30M24 24V34" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round"/>
    </svg>),
  },
]

export default function CtaSection() {
  return (
    <section className={styles.section} id="start-today">
      <div className="container">
        <h2 className={styles.title}>BẮT ĐẦU NGAY HÔM NAY</h2>
        {/* Bootstrap: 1 col xs, 3 col md */}
        <div className="row g-3">
          {CARDS.map((card) => (
            <div key={card.id} className="col-12 col-md-4">
              <Link id={card.id} to={card.to} className={`${styles.card} h-100`}>
                <div className={styles.icon}>{card.icon}</div>
                <span>{card.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
