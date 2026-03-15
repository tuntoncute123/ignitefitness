import styles from './Footer.module.css'

const INFO_LINKS  = ['Về Chúng Tôi','Hệ Thống Phòng Tập','Tin Tức','Tuyển Dụng','Liên Hệ']
const GYM_LINKS   = ['Lịch Tập','Giá Hội Viên','Cơ Sở Vật Chất','Ứng Dụng Ignite Fitness']
const POLICY_LINKS = ['Chính Sách Bảo Mật','Điều Khoản & Điều Kiện','Chăm Sóc Khách Hàng']

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      {/* TOP */}
      <div className={styles.top}>
        <div className={`container ${styles.topInner}`}>
          <div className={styles.logoWrap}>
            <div className={styles.logoBlock}>
              <span className={styles.logoTop}>THE</span>
              <span className={styles.logoBottom}>IGNITE</span>
            </div>
            <div className={styles.logoRight}>
              <span className={styles.logoBrand}>gym</span>
              <span className={styles.logoTagline}>new way to fit</span>
            </div>
          </div>
          <a href="#app" className="btn btn-white-solid" id="btn-download-footer"
            style={{ borderRadius:'999px', padding:'9px 22px', fontWeight:700, background:'white', color:'var(--blue)', border:'2px solid white', textDecoration:'none', display:'inline-flex', alignItems:'center' }}>
            TẢI APP NGAY
          </a>
        </div>
      </div>

      {/* BODY – Bootstrap row */}
      <div className={styles.body}>
        <div className="container">
          {/* Bootstrap: 6/12 on xs, auto cols on md */}
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <FooterCol title="Thông Tin" links={INFO_LINKS} />
            </div>
            <div className="col-6 col-md-3">
              <FooterCol title="Phòng Tập" links={GYM_LINKS} />
            </div>
            <div className="col-6 col-md-3">
              <FooterCol title="Chính sách" links={POLICY_LINKS} />
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.lang}>
                <span>🇻🇳</span> Tiếng Việt <span className={styles.arrow}>▾</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span className={styles.copy}>© 2025 Ignite Fitness.</span>
          <div className={styles.social}>
            <span>Theo dõi chúng tôi:</span>
            <SocialIcon label="Facebook" id="social-fb">
              <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
            </SocialIcon>
            <SocialIcon label="Instagram" id="social-ig">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </SocialIcon>
            <SocialIcon label="TikTok" id="social-tiktok">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </SocialIcon>
            <SocialIcon label="YouTube" id="social-yt">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className={styles.colTitle}>{title}</h4>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link}><a href="#">{link}</a></li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ label, id, children }) {
  return (
    <a href="#" id={id} aria-label={label} className={styles.socialIcon}>
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">{children}</svg>
    </a>
  )
}
