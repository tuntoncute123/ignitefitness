import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Facilities.module.css'
import Knowledge from '../../components/Knowledge/Knowledge'
import Reveal from '../../components/Reveal/Reveal'
import gymInteriorImg from '../../assets/gym_interior.png'

const TABS = [
  { id: 'thiet-bi-tap', label: 'Thiết bị tập' },
  { id: 'dao-tao-the-hinh', label: 'Đào tạo thể hình' },
  { id: 'tien-ich-mien-phi', label: 'Tiện ích miễn phí' },
  { id: 'checklist-lan-dau-tap', label: 'Checklist lần đầu tập' },
]

function Accordion({ title, icon, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        <div>
          <span dangerouslySetInnerHTML={{ __html: icon }} />
          {title}
        </div>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  )
}

export default function Facilities() {
  const { hash } = useLocation()
  const activeTab = hash ? hash.replace('#', '') : TABS[0].id

  // Using the gym_interior.png and a couple of placeholder images from public/assets if any
  const THIET_BI_IMGS = [
    gymInteriorImg,
    "https://thenewgym.vn/wp-content/uploads/2025/12/Functional-2.jpg.webp",
    "https://thenewgym.vn/wp-content/uploads/2025/12/Functional-1.jpg.webp",
    "https://thenewgym.vn/wp-content/uploads/2025/12/Functional-3.jpg.webp",
    "https://thenewgym.vn/wp-content/uploads/2025/12/Ladies-Only.jpg.webp",
    "https://thenewgym.vn/wp-content/uploads/2025/12/Studio.jpg.webp"
  ]

  return (
    <div className={styles.facilitiesPage}>
      <div className="container">
        <Reveal direction="up">
          <h1 className={styles.pageTitle}>The New Gym Có Tất Cả Mọi Thứ Bạn Cần</h1>
        </Reveal>
      </div>

      <div className={styles.stickyNav}>
        <div className="container">
          <div className={styles.navRow}>
            {TABS.map(tab => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`${styles.navBtn} ${activeTab === tab.id ? styles.active : ''}`}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Thiết bị tập */}
        <section id="thiet-bi-tap" className={styles.sectionBlock}>
          <Reveal direction="up" className={styles.imageScroller}>
            {THIET_BI_IMGS.map((img, i) => (
              <img key={i} src={img} alt={`Thiết bị tập ${i}`} />
            ))}
          </Reveal>
          <div className="row mt-5">
            <div className="col-12 col-lg-8 offset-lg-2">
              <Reveal direction="up">
                <h2 className="mb-4 text-center">Vô số thiết bị tập sức mạnh và cardio</h2>
              </Reveal>
              <Reveal direction="up" delay={1}>
                <Accordion title="Thiết bị tập sức mạnh" icon="💪 " defaultOpen>
                  <p>Các dòng máy tập sức mạnh thân thiện với người dùng, được thiết kế để tác động chuyên sâu đến từng nhóm cơ.</p>
                  <ul>
                    <li>Máy Khung Cáp Đa Năng (Cable Towers)</li>
                    <li>Ghế Tập Đa Năng</li>
                    <li>Phòng Giãn Cơ và Phục Hồi Cơ</li>
                    <li>Khu vực Tạ Tự Do (Tạ Đơn Và Tạ Đòn)</li>
                    <li>Khu Vực Tập Cơ Bụng Và Giãn Cơ</li>
                    <li>Máy Kéo Cáp Đôi</li>
                    <li>Máy Smith</li>
                  </ul>
                </Accordion>
              </Reveal>
              <Reveal direction="up" delay={2}>
                <Accordion title="Thiết bị cardio" icon="🏃 ">
                  <p>Các thiết bị Cardio hiện đại của chúng tôi mang đến nhiều lựa chọn để mọi người có thể làm nóng cơ thể, cải thiện nhịp tim và đốt cháy calo.</p>
                  <ul>
                    <li>Máy Chạy Bộ (Treadmill)</li>
                    <li>Máy Chạy Bộ Lên Dốc/Leo Cầu Thang</li>
                    <li>Máy Chèo Thuyền</li>
                    <li>Xe Đạp Đứng</li>
                    <li>Máy Tập Đạp Chân Ngả Lưng</li>
                  </ul>
                </Accordion>
              </Reveal>
              <Reveal direction="up" delay={3}>
                <Accordion title="Tập chức năng (Functional)" icon="⚡ ">
                  <p>Thêm sự đa dạng vào lịch tập. Các bài tập chức năng mô phỏng hoạt động hàng ngày, giúp xây dựng sức mạnh toàn diện và tác động đa nhóm cơ cùng lúc.</p>
                  <ul>
                    <li>Khu Vực Tập Chức Năng: Dây Thừng Tập Lực, Khung Cáp Đa Năng, Tạ Chuông, Dây Kháng Lực, Bóng Tập, v.v.</li>
                    <li>Khu Vực Tập Luyện Cá Nhân</li>
                  </ul>
                </Accordion>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Đào tạo thể hình */}
        <section id="dao-tao-the-hinh" className={styles.sectionBlock}>
          <Reveal direction="up">
            <h2 className="text-center mb-4">Hướng dẫn tập luyện miễn phí tại The New Gym</h2>
          </Reveal>
          <Reveal direction="up" delay={1}>
            <img
              src="https://thenewgym.vn/wp-content/uploads/2026/03/csvc-TNG-1-e1773298062148.jpg.webp"
              alt="Hướng dẫn tập luyện"
              className={`${styles.imgRounded} mb-5`}
            />
          </Reveal>
          <div className={styles.featureGrid}>
            <Reveal direction="up" delay={1} className={styles.featureCard}>
              <div className={styles.featureCardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><path opacity="0.4" d="M30 6.6c-8.7 0-15.8 7.1-15.8 15.9 0 8.5 6.7 15.5 15.4 15.8.3 0 .6 0 .8.1 8.5-.3 15.2-7.2 15.2-15.8C45.8 13.8 38.7 6.6 30 6.6Z" fill="var(--blue)"/><path d="M46.9 47.2C37.6 41 22.5 41 13.1 47.2 8.9 50 6.5 53.8 6.5 57.9c0 4.1 2.3 7.9 6.5 10.7 4.7 3.1 10.8 4.7 17 4.7s12.3-1.6 17-4.7c4.2-2.8 6.5-6.6 6.5-10.7 0-4.1-2.3-7.9-6.5-10.7Z" fill="var(--blue)"/></svg>
              </div>
              <h3>Tập luyện cùng huấn luyện viên miễn phí</h3>
              <p>Bạn đang tìm kiếm một kế hoạch tập luyện được cá nhân hóa hoặc cần hỗ trợ sử dụng thiết bị? Đội ngũ Huấn luyện viên của chúng tôi luôn sẵn sàng hỗ trợ bạn.</p>
            </Reveal>
            <Reveal direction="up" delay={2} className={styles.featureCard}>
              <div className={styles.featureCardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><path d="M53.3 43V57c0 11.7-4.7 16.3-16.3 16.3H23C11.3 73.3 6.7 68.7 6.7 57V43c0-11.7 4.7-16.3 16.3-16.3h14c11.7 0 16.3 4.7 16.3 16.3Z" fill="var(--blue)"/><path opacity="0.4" d="M57 6.7H43c-11.5 0-16.2 4.6-16.3 15.8H37c14 0 20.5 6.5 20.5 20.5v10.3c11.3-.1 15.8-4.8 15.8-16.3V23c0-11.7-4.7-16.3-16.3-16.3Z" fill="var(--blue)"/></svg>
              </div>
              <h3>Tiếp tục luyện tập trên ứng dụng The New Gym</h3>
              <p>Tập luyện mọi lúc, mọi nơi với hàng loạt video hướng dẫn tập luyện miễn phí trong Ứng dụng The New Gym, giúp bạn có thể thực hiện tại nhà hoặc ngay tại phòng tập.</p>
            </Reveal>
            <Reveal direction="up" delay={3} className={styles.featureCard}>
              <div className={styles.featureCardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><path opacity="0.4" d="M71.7 27.9v24.8c0 .5-.2 1-.6 1.4-4.8 4.9-13.4 13.5-18.4 18.5-.4.5-1 .7-1.5.7H24.6C15.6 73.3 8.3 66 8.3 57.1V27.9c0-9 7.3-16.2 16.3-16.2h30.8c9 0 16.3 7.3 16.3 16.2Z" fill="var(--blue)"/><path d="M27.6 21c-1.4 0-2.5-1.1-2.5-2.5V9.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v9.3c0 1.4-1.1 2.5-2.5 2.5ZM52.4 21c-1.4 0-2.5-1.1-2.5-2.5V9.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v9.3c0 1.4-1.1 2.5-2.5 2.5ZM49.3 42.4h-24.8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h24.8c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5ZM40 54.7H24.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5H40c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5Z" fill="var(--blue)"/><path d="M71.7 52.7c0 .5-.2 1-.6 1.4-4.8 4.9-13.4 13.5-18.4 18.5-.4.5-1 .7-1.5.7-1.1 0-2.2-.9-2.2-2.1V59.5c0-4.9 4.1-8.9 9.2-8.9 3.2 0 7.6 0 11.3 0 1.3 0 2.2 1 2.2 2.1Z" fill="var(--blue)"/></svg>
              </div>
              <h3>Hướng dẫn sử dụng thiết bị</h3>
              <p>Xem hướng dẫn chi tiết và video trong Ứng dụng The New Gym, giúp bạn thực hiện đúng kỹ thuật (form) và nắm bắt các phương pháp tốt nhất.</p>
            </Reveal>
          </div>
        </section>

        {/* Tiện ích phòng tập */}
        <section id="tien-ich-mien-phi" className={styles.sectionBlock}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md-6">
              <Reveal direction="left">
                <img
                  src="https://thenewgym.vn/wp-content/uploads/elementor/thumbs/kham-pha-tien-ich-rg89zbu0kyj1agkrrws54ier4f3mzgk9787ifdqsbk.jpg"
                  alt="Tiện ích"
                  className={styles.imgRounded}
                />
              </Reveal>
            </div>
            <div className="col-12 col-md-6">
              <Reveal direction="right">
                <h2 className="mb-4">Tiện ích phòng tập</h2>
              </Reveal>
              <div className={styles.utilityList}>
                <Reveal direction="up" delay={1} className={styles.utilityItem}>
                  <div className={styles.utilityIcon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="var(--blue)"/></svg></div>
                  <span>Check-In ‘Không Chạm’</span>
                </Reveal>
                <Reveal direction="up" delay={2} className={styles.utilityItem}>
                  <div className={styles.utilityIcon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="var(--blue)"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="var(--blue)"/></svg></div>
                  <span>WiFi Miễn Phí</span>
                </Reveal>
                <Reveal direction="up" delay={3} className={styles.utilityItem}>
                  <div className={styles.utilityIcon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="var(--blue)"/></svg></div>
                  <span>Khu Vực Nước Uống</span>
                </Reveal>
                <Reveal direction="up" delay={4} className={styles.utilityItem}>
                  <div className={styles.utilityIcon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="var(--blue)"/></svg></div>
                  <span>Phòng Thay Đồ</span>
                </Reveal>
                <Reveal direction="up" delay={5} className={styles.utilityItem}>
                  <div className={styles.utilityIcon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="var(--blue)"/></svg></div>
                  <span>Phòng Tắm</span>
                </Reveal>
                <Reveal direction="up" delay={6} className={styles.utilityItem}>
                  <div className={styles.utilityIcon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="var(--blue)"/></svg></div>
                  <span>Tủ Lockers</span>
                </Reveal>
                <Reveal direction="up" delay={7} className={styles.utilityItem}>
                  <div className={styles.utilityIcon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="var(--blue)"/></svg></div>
                  <span>Bãi Gửi Xe Miễn Phí</span>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist lần đầu tập */}
        <section id="checklist-lan-dau-tap" className={styles.sectionBlock}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md-6 order-md-2">
              <Reveal direction="right">
                <h2 className="mb-4">Cần chuẩn bị những gì trước khi đến phòng tập</h2>
              </Reveal>
              <Reveal direction="up" delay={1}>
                <Accordion title="Tải ứng dụng" defaultOpen>
                  <p>Hội viên có thể xem hướng dẫn và tải ứng dụng tại: <a href="https://app.thenewgym.vn/" target="_blank" rel="noreferrer">https://app.thenewgym.vn/</a><br />Nếu gặp bất kỳ khó khăn nào trong quá trình cài đặt, bạn hãy nhờ đến sự trợ giúp từ nhân viên The New Gym nhé!</p>
                </Accordion>
              </Reveal>
              <Reveal direction="up" delay={2}>
                <Accordion title="Chuẩn bị đồ dùng cá nhân">
                  <p>Trước khi tập, hãy chuẩn bị giày thể thao, quần áo tập phù hợp, bình nước và khăn lau mồ hôi. Đừng quên mang theo ổ khóa cá nhân để sử dụng tủ khóa an toàn tại The New Gym nhé.</p>
                </Accordion>
              </Reveal>
              <Reveal direction="up" delay={3}>
                <Accordion title="Bài tập trên ứng dụng">
                  <p>Ứng dụng The New Gym cung cấp thư viện bài tập từ cơ bản đến nâng cao để bạn dễ dàng tham khảo khi tập luyện. Bạn có thể tìm bài tập phù hợp và xem hướng dẫn chi tiết để luyện tập đúng kỹ thuật.</p>
                </Accordion>
              </Reveal>
              <Reveal direction="up" delay={4}>
                <Accordion title="Hướng dẫn tập luyện & thiết bị">
                  <p>Lần đầu đến phòng tập? Đừng lo lắng! Đội ngũ huấn luyện viên cá nhân (PT) của chúng tôi luôn sẵn sàng hướng dẫn bạn cách sử dụng an toàn các thiết bị máy móc Cardio và Strength, giúp bạn làm quen nhanh chóng với môi trường tập thân thiện tại The New Gym.</p>
                </Accordion>
              </Reveal>
              <Reveal direction="up" delay={5}>
                <Accordion title="Theo dõi kết quả tập luyện">
                  <p>Tận dụng tính năng Theo dõi Kết quả (Inbody) trên ứng dụng: Dễ dàng ghi lại và phân tích các chỉ số cơ thể quan trọng như chỉ số, tỷ lệ mỡ, cơ, cân nặng và các số đo khác. Giúp bạn dễ dàng thấy được sự thay đổi tích cực và có thêm động lực chinh phục mục tiêu.</p>
                </Accordion>
              </Reveal>
            </div>
            <div className="col-12 col-md-6 order-md-1">
              <Reveal direction="left">
                <img
                  src="https://thenewgym.vn/wp-content/uploads/elementor/thumbs/lan-dau-den-the-new-gym-rg8a91hz7btp9egv23xcw2683r86iv4ejaw4ybcc0w.jpg"
                  alt="Lần đầu tập"
                  className={styles.imgRounded}
                />
              </Reveal>
            </div>
          </div>
        </section>

      </div>

      <Knowledge />
    </div>
  )
}
