import React, { useEffect } from 'react'
import styles from './Join.module.css'
import Reveal from '../../components/Reveal/Reveal'

export default function Join() {
  // Cuộn lên đầu trang khi vào
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.joinPage}>
      <div className="container mt-5">
        <Reveal direction="fade">
          {/* Branch Top Row */}
          <div className={styles.branchHeader}>
            <div className={styles.branchInfo}>
              <h1 className={styles.branchName}>
                TNG Hoàng Văn Thụ
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/></svg>
              </h1>
              <div className={styles.branchAddress}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--blue)"><path d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.2.5.3.7.3s.5-.1.7-.3c.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 11.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/></svg>
                <span>431A Hoàng Văn Thụ, Tân Bình, Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
            
            <div className={styles.branchPricing}>
              <label>Tham gia ngay, chỉ từ</label>
              <div className={styles.price}>
                299.000 <sup>Đ</sup> <sub>/ tháng</sub>
              </div>
              <div className={styles.branchMeta}>
                <span><strong>Mở cửa:</strong> 24/7</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Feature Strip */}
        <Reveal direction="up" delay={1}>
          <div className={styles.featuresStrip}>
            <div className={styles.featureItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Thiết bị hiện đại
            </div>
            <div className={styles.featureItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Không ràng buộc hợp đồng
            </div>
            <div className={styles.featureItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              Lớp học miễn phí
            </div>
            <div className={styles.featureItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Chi phí hợp lý
            </div>
          </div>
        </Reveal>

        {/* Table Comparison */}
        <Reveal direction="up" delay={2}>
          <h2 className={styles.pageTitle}>Chọn Gói Tập</h2>
          <div className={styles.tableContainer}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <div className={`${styles.planHeader} ${styles.highlight}`}>
                      <span className={styles.planName}>Tất cả chi nhánh</span>
                      <div className={styles.planPrice}>
                        399.000<sup>Đ</sup>
                      </div>
                      <span className={styles.planSub}>/ hàng tháng</span>
                    </div>
                  </th>
                  <th>
                    <div className={`${styles.planHeader} ${styles.highlightBlue}`}>
                      <span className={styles.planName}>1 Chi nhánh</span>
                      <div className={styles.planPrice}>
                        349.000<sup>Đ</sup>
                      </div>
                      <span className={styles.planSub}>/ trả trước</span>
                    </div>
                  </th>
                  <th>
                    <div className={styles.planHeader}>
                      <span className={styles.planName}>1 Chi nhánh</span>
                      <div className={styles.planPrice}>
                        299.000<sup>Đ</sup>
                      </div>
                      <span className={styles.planSub}>/ hàng tháng</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phương thức thanh toán</td>
                  <td>Tự động thanh toán<br/>hàng tháng</td>
                  <td>Thanh toán tiền mặt</td>
                  <td>Tự động thanh toán<br/>hàng tháng</td>
                </tr>
                <tr style={{background: '#f8f9fa'}}><td colSpan="4"><strong>Tiện ích</strong></td></tr>
                <tr>
                  <td>Tập luyện tại tất cả chi nhánh</td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Tặng 2 buổi tập cùng Huấn luyện viên</td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Miễn phí đo chỉ số và kiểm tra sai lệch tư thế</td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Miễn phí tham gia các lớp tập nhóm</td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                </tr>
                <tr>
                  <td>Miễn phí nước uống, Wifi và bãi đậu xe</td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                </tr>
                <tr>
                  <td>Quản lý gói tập trên App</td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                </tr>
                <tr>
                  <td>Xem video bài tập miễn phí trên App</td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                </tr>
                <tr>
                  <td>Theo dõi kết quả luyện tập trên App</td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                  <td><span className={styles.checkIcon}>✓</span></td>
                </tr>
                <tr>
                  <td></td>
                  <td><button className={`${styles.btnSelect} ${styles.highlight}`}>Chọn</button></td>
                  <td><button className={`${styles.btnSelect} ${styles.highlightBlue}`}>Chọn</button></td>
                  <td><button className={styles.btnSelect}>Chọn</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Other Options */}
        <Reveal direction="up" delay={3}>
          <div className={styles.longTermSection}>
            <h2 className={styles.pageTitle}>Các lựa chọn dài hạn khác</h2>
            <div className={styles.longTermGrid}>
              <div className={styles.longTermCard}>
                <h3 className={styles.longTermTitle}>6 tháng tất cả chi nhánh</h3>
                <div className={styles.longTermPrice}>
                  299.000 <sup>Đ</sup> <sub>/ tháng</sub>
                </div>
                <button className={`${styles.btnSelect} ${styles.highlightBlue}`}>Chọn</button>
                <div className={styles.longTermTotal}>
                  Tổng thanh toán <strong>1.799.000 <sup>Đ</sup></strong> / 6 tháng
                </div>
              </div>
            </div>

            <div className={styles.notes}>
              <p>*Các gói thanh toán tự động cần phải hủy trong tương lai ít nhất 4 ngày trước ngày kết thúc</p>
              <p>*Thẻ ngân hàng: sử dụng thẻ thanh toán quốc tế thuộc hệ thống ngân hàng (JCB, VISA, MASTERCARD, AMEX, ...)</p>
              <p>*Tiền mặt: cà thẻ, chuyển khoản hoặc tiền mặt</p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  )
}
