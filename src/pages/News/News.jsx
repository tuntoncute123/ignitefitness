import React, { useState } from 'react'
import styles from './News.module.css'

// Mock Data
const FEATURED_POSTS = [
  {
    id: 1,
    title: "Đạm Whey: Thiết Yếu Hay Chỉ Là Sự Tiện Lợi?",
    excerpt: "Chất đạm (protein) là một phần thiết yếu của bất kỳ chế độ ăn uống nào! Bạn có thể tìm thấy chất đạm trong trứng, cá, các loại hạt, các sản phẩm từ sữa, và trong các thanh hoặc thức...",
    tags: ["Dinh dưỡng"],
    image: "https://thenewgym.vn/wp-content/uploads/elementor/thumbs/whey-rehpoftibe3pawmrk35xi2iut4jhrt7bm8radm1l4w.jpg",
    url: "#"
  },
  {
    id: 2,
    title: "Thanh Protein Bar: ‘Cứu Tinh’ Hay ‘Cạm Bẫy’ Cho Gymer?",
    excerpt: "Ai cũng biết protein là yếu tố quan trọng để xây dựng cơ bắp và phục hồi cơ thể sau những giờ phút “cày nát” phòng gym. Trong khi hầu hết mọi người đều đồng ý với việc uống một...",
    tags: ["Kiến thức", "Dinh dưỡng"],
    image: "https://thenewgym.vn/wp-content/uploads/elementor/thumbs/protein-bar-rdnnnmtfycncinr7l0uaw6aoz7yn1q9jrr7tybr9ds.jpg",
    url: "#"
  },
  {
    id: 3,
    title: "Coca Zero Hay Coca Không Đường Có Giúp Giảm Cân?",
    excerpt: "Trong hành trình tìm kiếm vóc dáng lý tưởng, nhiều người đã chuyển sang sử dụng coca không đường (hay còn gọi là coca cola zero hoặc diet coke) với niềm tin rằng “không calo thì không tăng cân”. Nhưng...",
    tags: ["Kiến thức", "Dinh dưỡng"],
    image: "https://thenewgym.vn/wp-content/uploads/elementor/thumbs/coca-cola-rg19pdc2xxy6fb9govwuivw7hp47wzwphribv1jnls.jpg",
    url: "#"
  }
]

const FILTERS = ["Mới nhất", "Người mới", "Tinh thần", "Kiến thức", "Dinh dưỡng", "Hướng dẫn"]

const POSTS = [
  {
    id: 4,
    title: "Ăn Gì Hết Buồn? 20 Thực Phẩm Cải Thiện Tâm Trạng, ‘Sạc’ Đầy Năng Lượng Tức Thì",
    excerpt: "Thức ăn chính là nhiên liệu, và loại nhiên liệu bạn chọn sẽ quyết định hiệu suất của cơ thể. Hãy tưởng tượng cơ thể bạn là một chiếc xe hiệu suất cao; bạn sẽ không muốn đổ cho nó...",
    tags: ["Tinh thần", "Dinh dưỡng"],
    image: "https://thenewgym.vn/wp-content/uploads/elementor/thumbs/IMG_7844-1-e1761011677241-rdigedyxb0e34bshq2zbkaz12ipd4hzixoqubn2i4g.webp",
    url: "#"
  },
  {
    id: 5,
    title: "Những điều cần lưu ý khi tham gia lớp học Aerobics tại The New Gym",
    excerpt: "Aerobics từ lâu đã trở thành bộ môn “quốc dân” được yêu thích nhờ khả năng đốt cháy năng lượng",
    tags: ["Người mới", "Kiến thức"],
    image: "https://thenewgym.vn/wp-content/uploads/2024/10/khoi-dong.png.webp",
    url: "#"
  },
  {
    id: 6,
    title: "Chi phí tập gym bao nhiêu là hợp lí?",
    excerpt: "Ở các thành phố lớn như TP.HCM hay Hà Nội, phong trào tập luyện hình thể đang phát triển mạnh",
    tags: ["Kiến thức"],
    image: "https://thenewgym.vn/wp-content/uploads/2024/10/cuong-do-tap-luyen.png.webp",
    url: "#"
  },
  {
    id: 7,
    title: "Người mới bắt đầu nên chuẩn bị gì khi tham gia lớp học Aerobics tại The New Gym?",
    excerpt: "Tham gia một bộ môn sôi động như Aerobics luôn mang lại nguồn năng lượng tích cực cho những ai",
    tags: ["Người mới", "Kiến thức"],
    image: "https://thenewgym.vn/wp-content/uploads/2025/12/TNG2750.jpg.webp",
    url: "#"
  },
  {
    id: 8,
    title: "So sánh nước uống miễn phí tại phòng gym và nước đóng chai",
    excerpt: "Trong quá trình tập luyện cường độ cao, nước không chỉ là cơn giải khát mà còn là “nhiên liệu”",
    tags: ["Kiến thức"],
    image: "https://thenewgym.vn/wp-content/uploads/2026/03/nuoc-uong-dong-chai-the-new-gym.jpg.webp",
    url: "#"
  },
  {
    id: 9,
    title: "Lợi ích khi tham gia lớp tập Bootcamp tại The New Gym",
    excerpt: "Trong thế giới thể hình hiện đại, Bootcamp nổi lên như một “làn gió mới” đầy thách thức nhưng cũng",
    tags: ["Người mới", "Kiến thức"],
    image: "https://thenewgym.vn/wp-content/uploads/2025/09/BANNER-LOP_Boot-camp.webp",
    url: "#"
  }
]

export default function News() {
  const [activeFilter, setActiveFilter] = useState("Mới nhất")

  const displayPosts = POSTS.filter(post => 
    activeFilter === "Mới nhất" || post.tags.includes(activeFilter)
  )

  return (
    <div className={styles.newsPage}>
      <div className="container pb-5">
        <h1 className={styles.pageTitle}>TẬP LUYỆN HIỆU QUẢ CÙNG <span>THE NEW GYM</span></h1>

        {/* Featured Section */}
        <div className={styles.featuredSection}>
          <div className="row flex-nowrap overflow-auto pb-3 g-4" style={{scrollbarWidth: 'none'}}>
            {FEATURED_POSTS.map((post) => (
              <div key={post.id} className="col-12 col-md-10 col-lg-8" style={{minWidth: '300px'}}>
                <div className={styles.featuredCard}>
                  <div className={styles.featuredImage}>
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.categoryTags}>
                      {post.tags.map(tag => (
                        <span key={tag} className={styles.categoryTag}>{tag}</span>
                      ))}
                    </div>
                    <a href={post.url} className={styles.postTitle}>{post.title}</a>
                    <div className={styles.postExcerpt}>{post.excerpt}</div>
                    <a href={post.url} className={styles.readMoreBtn}>
                      Đọc tiếp <span className={styles.arrowIcon}></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className={styles.filterSection}>
          {FILTERS.map(filter => (
            <button 
              key={filter} 
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Section */}
        <div className="row g-4 mb-5">
          {displayPosts.map(post => (
            <div key={post.id} className="col-12 col-sm-6 col-lg-4">
              <a href={post.url} className={styles.gridCard}>
                <div className={styles.gridImage}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.gridContent}>
                  <div className={styles.categoryTags}>
                    {post.tags.map(tag => (
                      <span key={tag} className={styles.categoryTag}>{tag}</span>
                    ))}
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <div className={styles.postExcerpt}>{post.excerpt}</div>
                  <div>
                    <span className={styles.readMoreBtn}>
                      Xem thêm <span className={styles.arrowIcon}></span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.loadMoreContainer}>
          <button className={styles.btnLoadMore}>Xem thêm ▾</button>
        </div>

        {/* Free Trial Form Section */}
        <div className={styles.formSection}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className={styles.formBox}>
                <h2 className={styles.formTitle}>NHẬN 7 NGÀY TẬP MIỄN PHÍ NGAY</h2>
                <form className={styles.freeTrialForm}>
                  <input type="text" placeholder="Tên" required />
                  <input type="tel" placeholder="Số điện thoại" required />
                  <button type="submit">Đăng ký ngay!</button>
                  <div className={styles.formDisclaimer}>
                    *Chỉ áp dụng cho khách hàng lần đầu tập luyện tại The New Gym
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
