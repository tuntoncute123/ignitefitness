import { useState } from 'react'
import styles from './BranchFinder.module.css'

const DISTRICTS = {
  hcm: ['Quận 1','Quận 3','Quận 5','Quận 7','Quận 10','Bình Thạnh','Tân Bình','Gò Vấp','Thủ Đức'],
  hn:  ['Ba Đình','Đống Đa','Hoàn Kiếm','Cầu Giấy','Hoàng Mai','Hai Bà Trưng','Thanh Xuân'],
  dn:  ['Hải Châu','Sơn Trà','Ngũ Hành Sơn','Cẩm Lệ'],
  ct:  ['Ninh Kiều','Bình Thủy','Cái Răng'],
  bd:  ['Thủ Dầu Một','Dĩ An','Thuận An'],
}

const TAGS = ['Quận 1','Quận 3','Quận 7','Bình Thạnh','Tân Bình','Gò Vấp','Hoàng Mai','Cầu Giấy','Hải Châu']

export default function BranchFinder() {
  const [city,     setCity]     = useState('')
  const [district, setDistrict] = useState('')
  const [activeTag, setActiveTag] = useState('Hoàng Mai')

  const handleFind = (e) => {
    e.preventDefault()
    if (!city) { alert('Vui lòng chọn thành phố!'); return }
    alert(`Đang tìm phòng tập tại: ${city}${district ? ', ' + district : ''}`)
  }

  return (
    <section className={styles.section} id="branches">
      <div className="container">
        <h2 className="section-title">Tìm Phòng Tập Gần Bạn</h2>

        {/* Bootstrap row for responsive inputs */}
        <div className="row g-2 justify-content-center mb-3">
          <div className="col-12 col-sm-auto">
            <select
              className={styles.select}
              id="city-select"
              value={city}
              onChange={(e) => { setCity(e.target.value); setDistrict('') }}
            >
              <option value="">Chọn thành phố</option>
              <option value="hcm">Hồ Chí Minh</option>
              <option value="hn">Hà Nội</option>
              <option value="dn">Đà Nẵng</option>
              <option value="ct">Cần Thơ</option>
              <option value="bd">Bình Dương</option>
            </select>
          </div>
          <div className="col-12 col-sm-auto">
            <select
              className={styles.select}
              id="district-select"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="">Chọn quận / huyện</option>
              {(DISTRICTS[city] || []).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          <div className="col-12 col-sm-auto">
            <button
              className="btn btn-blue w-100"
              id="btn-find-branch"
              onClick={handleFind}
              style={{ borderRadius: '999px', padding: '11px 28px', fontWeight: 700 }}
            >
              Tìm phòng tập →
            </button>
          </div>
        </div>

        <div className={styles.tags}>
          {TAGS.map((tag) => (
            <span
              key={tag}
              className={`${styles.tag} ${tag === activeTag ? styles.tagActive : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
