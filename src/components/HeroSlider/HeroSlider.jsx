import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroSlider.module.css'
import heroBanner1 from '../../assets/hero_banner_1.png'
import heroBanner2 from '../../assets/hero_banner_2.png'
import heroBanner3 from '../../assets/hero_banner_3.png'

const SLIDES = [
  {
    id: 'slide-1',
    img: heroBanner1,
    alt: 'Ignite Fitness 2026',
    title: 'IGNITE FITNESS 2026',
    sub: 'Nâng tầm trải nghiệm tập luyện của bạn với hệ thống phòng gym hiện đại nhất Việt Nam',
    cta: 'Xem chi tiết →',
    ctaHref: '/#features',
  },
  {
    id: 'slide-2',
    img: heroBanner2,
    alt: 'Hướng dẫn tập luyện miễn phí',
    title: 'HƯỚNG DẪN\nTẬP LUYỆN MIỄN PHÍ',
    sub: 'Đội ngũ PT chuyên nghiệp sẵn sàng đồng hành cùng bạn trên hành trình thay đổi bản thân',
    cta: 'Tìm hiểu ngay →',
    ctaHref: '/#free-trial',
  },
  {
    id: 'slide-3',
    img: heroBanner3,
    alt: 'Thêm bạn thêm vui',
    title: 'THÊM BẠN\nTHÊM VUI',
    sub: 'Giới thiệu bạn bè, cùng nhau rèn luyện và nhận ưu đãi hấp dẫn mỗi tháng',
    cta: 'Tham gia ngay →',
    ctaHref: '/#pricing',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.slider}>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
            id={slide.id}
          >
            <img src={slide.img} alt={slide.alt} className={styles.bg} />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h1 className={styles.title}>
                {slide.title.split('\n').map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}
              </h1>
              <p className={styles.sub}>{slide.sub}</p>
              <Link to={slide.ctaHref} className={`btn btn-white-outline ${styles.cta}`}>
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button
          className={styles.arrow}
          id="slider-prev"
          aria-label="Previous"
          onClick={() => goTo(current - 1)}
        >
          &#8249;
        </button>

        <div className={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              id={`dot-${i + 1}`}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.arrow}
          id="slider-next"
          aria-label="Next"
          onClick={() => goTo(current + 1)}
        >
          &#8250;
        </button>
      </div>
    </section>
  )
}
