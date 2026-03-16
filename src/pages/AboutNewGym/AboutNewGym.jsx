import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './AboutNewGym.module.css'
import Reveal from '../../components/Reveal/Reveal'
import BranchFinder from '../../components/BranchFinder/BranchFinder'
import { OFFICIAL_URLS } from '../../constants/links'

const MORE_CARDS = [
  {
    title: 'Tại sao chọn The New Gym',
    desc: 'The New Gym mang đến không gian tập luyện thân thiện, nơi Hội viên luôn được hướng dẫn đúng cách và an toàn.',
    to: '/co-so-vat-chat',
  },
  {
    title: 'Chăm sóc khách hàng / liên hệ',
    desc: 'Mọi thắc mắc đều được hỗ trợ nhanh chóng qua hotline 1900 63 69 20, fanpage và đội ngũ tại các chi nhánh.',
    to: '/ve-the-new-gym#lien-he',
  },
  {
    title: 'Hướng dẫn cho người mới',
    desc: 'Người mới có thể bắt đầu dễ dàng với huấn luyện viên hỗ trợ trực tiếp và các lớp tập nhóm miễn phí.',
    to: '/tin-tuc',
  },
  {
    title: 'Hướng dẫn tập luyện miễn phí',
    desc: 'Hội viên có thể tham khảo bài tập miễn phí trên ứng dụng The New Gym với hướng dẫn rõ ràng theo từng trình độ.',
    to: '/ho-tro-tap-luyen',
  },
  {
    title: 'Thông tin gói tập',
    desc: 'The New Gym có các gói tập linh hoạt theo nhu cầu: gói 1 chi nhánh và gói tập toàn hệ thống.',
    to: '/#pricing',
  },
  {
    title: 'Ứng dụng The New Gym',
    desc: 'Đăng ký gói tập, xem lịch lớp và theo dõi chỉ số sức khỏe thuận tiện ngay trên ứng dụng di động.',
    to: '/#app',
  },
]

const CONTACT_ITEMS = [
  { label: 'Hotline', value: '1900 63 69 20', href: 'tel:1900636920' },
  { label: 'Email', value: 'cskh@thenewgym.vn', href: 'mailto:cskh@thenewgym.vn' },
  { label: 'Website', value: 'thenewgym.vn', href: OFFICIAL_URLS.website },
]

export default function AboutNewGym() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal direction="up">
            <p className={styles.eyebrow}>Gym Cho Mọi Người</p>
            <h1 className={styles.heroTitle}>VỀ THE NEW GYM</h1>
            <p className={styles.heroDesc}>
              Cho dù bạn là người mới tập gym hay là người tập lâu năm, The New Gym luôn là một môi trường tập luyện mà tất cả mọi người đều cảm thấy thoải mái nhất.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.sectionTitle}>Về The New Gym</h2>
          </Reveal>

          <div className={styles.storyGrid}>
            <Reveal direction="left">
              <div className={styles.storyCard}>
                <p>
                  Mỗi người bước chân vào phòng tập đều mang theo một câu chuyện và mục tiêu riêng biệt. Tại The New Gym, chúng tôi tôn trọng hành trình đó và mong muốn tạo ra một môi trường tập luyện an toàn, nơi mọi rào cản đều được xóa bỏ.
                </p>
                <p>
                  Chúng tôi chú trọng đến sự an toàn trong tập luyện thông qua các dịch vụ hỗ trợ thiết thực như đo chỉ số cơ thể và kiểm tra tư thế, giúp Hội viên thấu hiểu bản thân hơn và tập luyện đúng kỹ thuật để bảo vệ sức khỏe lâu dài.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className={styles.storyCard}>
                <p>
                  Bạn đang tìm kiếm thêm động lực để đạt được mục tiêu tập luyện? Hoặc bạn cần sự hướng dẫn vì chưa từng tập gym trước đây?
                </p>
                <p>
                  Là Hội viên The New Gym, bạn có thể tham gia các chương trình hướng dẫn tập luyện miễn phí, tham khảo thêm những chia sẻ về sức khỏe và các lời khuyên tập luyện hữu ích trên website của chúng tôi.
                </p>
                <p>
                  Mục tiêu của The New Gym là xây dựng một môi trường tập luyện an toàn và thân thiện, nơi tất cả mọi người đều cảm thấy được chào đón.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.joinStrip}>
        <div className="container">
          <div className={styles.joinCard}>
            <Reveal direction="left">
              <h2 className={styles.joinTitle}>Tham gia hệ thống phòng tập</h2>
              <p className={styles.joinDesc}>
                Bạn đang muốn cải thiện sức khỏe và vóc dáng? Hãy bắt đầu ngay hôm nay. The New Gym luôn có các gói tập phù hợp để bạn dễ dàng tham gia và duy trì lối sống lành mạnh.
              </p>
              <Link to="/tham-gia" className={styles.primaryBtn}>Tham gia ngay</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.branchGrid}>
            <Reveal direction="left">
              <div>
                <h2 className={styles.sectionTitleLeft}>Luyện tập không giới hạn với hơn 15 chi nhánh</h2>
                <p className={styles.textMuted}>
                  Là một trong những chuỗi phòng tập uy tín với mạng lưới hơn 15 chi nhánh, The New Gym mang đến đặc quyền tập luyện không giới hạn tại bất kỳ câu lạc bộ nào.
                </p>
                <p className={styles.textMuted}>
                  Hội viên được tiếp cận thiết bị hiện đại, các chương trình hướng dẫn miễn phí và trải nghiệm linh hoạt tối đa cho lịch trình bận rộn.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <img
                className={styles.branchImg}
                src="https://thenewgym.vn/wp-content/uploads/2025/09/he-thong-phong-tap-cua-the-new-gym-1-2.webp"
                alt="Hệ thống phòng tập The New Gym"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.journeyTitle}>HÀNH TRÌNH CỦA BẠN BẮT ĐẦU TỪ ĐÂY</h2>
            <Link to="/#pricing" className={styles.secondaryBtn}>Khám phá gói hội viên</Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.sectionTitleCenter}>TÌM HIỂU THÊM VỀ CHÚNG TÔI</h2>
          </Reveal>

          <div className={styles.moreGrid}>
            {MORE_CARDS.map((card, index) => (
              <Reveal key={card.title} direction="up" delay={(index % 3) + 1}>
                <Link className={styles.moreCard} to={card.to}>
                  <div className={styles.moreHead}>
                    <h3>{card.title}</h3>
                    <span className={styles.arrowCircle}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.moreDivider} />
                  <p>{card.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection} id="lien-he">
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.sectionTitleCenter}>Chăm sóc khách hàng</h2>
            <p className={styles.contactLead}>
              Đội ngũ The New Gym luôn sẵn sàng hỗ trợ nhanh chóng qua các kênh liên hệ chính thức.
            </p>
          </Reveal>

          <div className={styles.contactGrid}>
            {CONTACT_ITEMS.map((item, index) => (
              <Reveal key={item.label} direction="up" delay={index + 1}>
                <a className={styles.contactItem} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BranchFinder />
    </main>
  )
}
