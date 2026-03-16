import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_ITEMS = [
    { label: 'Giá Hội viên', href: '/#pricing' },
    { label: 'Tìm phòng tập', href: '/#branches' },
    { label: 'Cơ sở vật chất', href: '/co-so-vat-chat' },
    { label: 'Kiến thức tập luyện', href: '/tin-tuc' },
    { label: 'Ứng dụng Ignite Fitness', href: '/#app' },
]

const MORE_LABEL = 'Tìm hiểu thêm'

const MORE_ITEMS = [
    { label: 'Về The New Gym', href: '/ve-the-new-gym' },
    { label: 'Gói Thuê PT', href: '/ho-tro-tap-luyen' },
    { label: 'Lớp Tập Nhóm', href: '/#features' },
    { label: 'Liên Hệ', href: '#footer' },
]

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [moreOpen, setMoreOpen] = useState(false)
    const [mobileMoreOpen, setMobileMoreOpen] = useState(false)
    const moreMenuRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 992) {
                setMobileOpen(false)
                setMobileMoreOpen(false)
            } else {
                setMoreOpen(false)
            }
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        const onOutsideClick = (event) => {
            if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
                setMoreOpen(false)
            }
        }

        const onEscape = (event) => {
            if (event.key === 'Escape') {
                setMoreOpen(false)
            }
        }

        document.addEventListener('mousedown', onOutsideClick)
        document.addEventListener('touchstart', onOutsideClick)
        document.addEventListener('keydown', onEscape)

        return () => {
            document.removeEventListener('mousedown', onOutsideClick)
            document.removeEventListener('touchstart', onOutsideClick)
            document.removeEventListener('keydown', onEscape)
        }
    }, [])

    const close = () => {
        setMobileOpen(false)
        setMobileMoreOpen(false)
        setMoreOpen(false)
    }

    const navigateTo = (href) => (event) => {
        const isRouteHash = href.startsWith('/#')
        const isLocalHash = href.startsWith('#')

        if (!isRouteHash && !isLocalHash) {
            close()
            return
        }

        event.preventDefault()

        const pathname = isRouteHash ? '/' : location.pathname
        const hash = isRouteHash ? href.slice(1) : href
        const isSameDestination = location.pathname === pathname && location.hash === hash

        if (isSameDestination) {
            event.preventDefault()
            const target = document.getElementById(hash.replace('#', ''))
            const header = document.getElementById('header')
            const offset = header ? header.offsetHeight + 12 : 88

            if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
            }
        }

        close()

        if (!isSameDestination) {
            navigate({ pathname, hash })
        }
    }

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="header">
                <div className={styles.inner}>

                    {/* LEFT: Hamburger (mobile only) */}
                    <button
                        id="mobile-menu-btn"
                        className={`${styles.hamburger} d-lg-none`}
                        aria-label="Toggle menu"
                        aria-controls="mobile-drawer"
                        aria-expanded={mobileOpen}
                        onClick={() => {
                            setMoreOpen(false)
                            setMobileOpen(v => !v)
                        }}
                    >
                        <span className={mobileOpen ? styles.bar1Open : styles.bar1} />
                        <span className={mobileOpen ? styles.bar2Open : styles.bar2} />
                        <span className={mobileOpen ? styles.bar3Open : styles.bar3} />
                    </button>

                    {/* CENTER/LEFT: Logo */}
                    <Link to="/" className={styles.logo} id="logo-link" onClick={close}>
                        <div className={styles.logoBlock}>
                            <span className={styles.logoTop}>THE</span>
                            <span className={styles.logoBottom}>IGNITE</span>
                        </div>
                        <div className={styles.logoRight}>
                            <span className={styles.logoBrand}>gym</span>
                            <span className={styles.logoTagline}>new way to fit</span>
                        </div>
                    </Link>

                    {/* CENTER: Desktop nav */}
                    <nav className={`${styles.desktopNav} d-none d-lg-flex`} id="main-nav">
                        {NAV_ITEMS.map(item => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={styles.navLink}
                                onClick={navigateTo(item.href)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className={styles.moreMenu} ref={moreMenuRef}>
                            <button
                                type="button"
                                className={`${styles.navLink} ${styles.moreToggle} ${moreOpen ? styles.navLinkActive : ''}`}
                                aria-expanded={moreOpen}
                                aria-haspopup="true"
                                aria-controls="header-more-menu"
                                onClick={() => setMoreOpen(v => !v)}
                            >
                                {MORE_LABEL}
                                <span className={`${styles.caret} ${moreOpen ? styles.caretOpen : ''}`}>▾</span>
                            </button>

                            <div
                                id="header-more-menu"
                                className={`${styles.moreDropdown} ${moreOpen ? styles.moreDropdownOpen : ''}`}
                            >
                                {MORE_ITEMS.map(item => (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        className={styles.moreItem}
                                        onClick={navigateTo(item.href)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* RIGHT: Actions */}
                    <div className={styles.actions}>
                        <div className={`${styles.lang} d-none d-sm-flex`}>
                            <span>🇻🇳</span><span>VI</span><span className={styles.caret}>▾</span>
                        </div>
                        <Link to="/#pricing" className={styles.btnJoin} id="btn-join" onClick={navigateTo('/#pricing')}>Tham gia</Link>
                        <Link to="/#free-trial" className={`${styles.btnFree} d-none d-sm-inline-flex`} id="btn-free" onClick={navigateTo('/#free-trial')}>
                            Miễn phí 7 ngày
                        </Link>
                    </div>
                </div>

                {/* MOBILE DRAWER */}
                <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`} id="mobile-drawer">
                    <div className={styles.drawerInner}>
                        {NAV_ITEMS.map(item => (
                            <Link key={item.label} to={item.href} className={styles.drawerLink} onClick={navigateTo(item.href)}>
                                {item.label}
                            </Link>
                        ))}

                        <div className={styles.drawerMore}>
                            <button
                                type="button"
                                className={`${styles.drawerLink} ${styles.drawerMoreToggle} ${mobileMoreOpen ? styles.drawerMoreToggleOpen : ''}`}
                                aria-expanded={mobileMoreOpen}
                                aria-controls="drawer-more-menu"
                                onClick={() => setMobileMoreOpen(v => !v)}
                            >
                                {MORE_LABEL}
                                <span className={`${styles.caret} ${mobileMoreOpen ? styles.caretOpen : ''}`}>▾</span>
                            </button>

                            <div
                                id="drawer-more-menu"
                                className={`${styles.drawerSubmenu} ${mobileMoreOpen ? styles.drawerSubmenuOpen : ''}`}
                            >
                                {MORE_ITEMS.map(item => (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        className={styles.drawerSubLink}
                                        onClick={navigateTo(item.href)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className={styles.drawerDivider} />
                        <div className={styles.drawerCtas}>
                            <Link to="/#pricing" className={`${styles.btnJoin} w-100 mb-2`} id="drawer-join" onClick={navigateTo('/#pricing')}>Tham gia</Link>
                            <Link to="/#free-trial" className={`${styles.btnFree} w-100`} id="drawer-free" onClick={navigateTo('/#free-trial')}>Miễn phí 7 ngày</Link>
                        </div>
                    </div>
                </div>
            </header>

            {mobileOpen && (
                <div className={styles.overlay} onClick={close} aria-hidden="true" />
            )}
        </>
    )
}