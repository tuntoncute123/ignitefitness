import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'Giá Hội viên',            href: '/#pricing'   },
  { label: 'Tìm phòng tập',           href: '/#branches'  },
  { label: 'Cơ sở vật chất',          href: '/co-so-vat-chat'  },
  { label: 'Kiến thức tập luyện',     href: '/tin-tuc'    },
  { label: 'Ứng dụng Ignite Fitness', href: '/#app'       },
  { label: 'Tìm hiểu thêm',           href: '/#about'     },
]

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close nav on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 992) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="header">
        <div className={styles.inner}>

          {/* ── LEFT: Hamburger (mobile only) ── */}
          <button
            id="mobile-menu-btn"
            className={`${styles.hamburger} d-lg-none`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span className={mobileOpen ? styles.bar1Open : styles.bar1} />
            <span className={mobileOpen ? styles.bar2Open : styles.bar2} />
            <span className={mobileOpen ? styles.bar3Open : styles.bar3} />
          </button>

          {/* ── CENTER/LEFT: Logo ── */}
          <a href="/" className={styles.logo} id="logo-link" onClick={close}>
            <div className={styles.logoBlock}>
              <span className={styles.logoTop}>THE</span>
              <span className={styles.logoBottom}>IGNITE</span>
            </div>
            <div className={styles.logoRight}>
              <span className={styles.logoBrand}>gym</span>
              <span className={styles.logoTagline}>new way to fit</span>
            </div>
          </a>

          {/* ── CENTER: Desktop nav ── */}
          <nav className={`${styles.desktopNav} d-none d-lg-flex`} id="main-nav">
            {NAV_ITEMS.map(item => (
              <a key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
                {item.label === 'Tìm hiểu thêm' && <span className={styles.caret}> ▾</span>}
              </a>
            ))}
          </nav>

          {/* ── RIGHT: Actions ── */}
          <div className={styles.actions}>
            {/* Language – shown on sm+ only */}
            <div className={`${styles.lang} d-none d-sm-flex`}>
              <span>🇻🇳</span><span>VI</span><span className={styles.caret}>▾</span>
            </div>
            {/* "Tham gia" – show on all */}
            <a href="/#pricing"    className={`${styles.btnJoin}`} id="btn-join">Tham gia</a>
            {/* "Miễn phí 7 ngày" – ẩn trên mobile, hiện từ sm (≥576px) */}
            <a href="/#free-trial" className={`${styles.btnFree} d-none d-sm-inline-flex`} id="btn-free">
              Miễn phí 7 ngày
            </a>
          </div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`} id="mobile-drawer">
          <div className={styles.drawerInner}>
            {NAV_ITEMS.map(item => (
              <a key={item.label} href={item.href} className={styles.drawerLink} onClick={close}>
                {item.label}
              </a>
            ))}
            <div className={styles.drawerDivider} />
            <div className={styles.drawerCtas}>
              <a href="/#pricing"    className={`${styles.btnJoin}    w-100 mb-2`} id="drawer-join" onClick={close}>Tham gia</a>
              <a href="/#free-trial" className={`${styles.btnFree}    w-100`}      id="drawer-free" onClick={close}>Miễn phí 7 ngày</a>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay to close drawer */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={close} aria-hidden="true" />
      )}
    </>
  )
}
