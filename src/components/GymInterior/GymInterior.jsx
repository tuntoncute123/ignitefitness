import styles from './GymInterior.module.css'
import gymInteriorImg from '../../assets/gym_interior.png'

export default function GymInterior() {
  return (
    <section className={styles.section} id="gym-interior" aria-label="Cơ sở vật chất Ignite Fitness">
      <img
        src={gymInteriorImg}
        alt="Phòng tập Ignite Fitness – Cơ sở vật chất hiện đại"
        className={styles.img}
      />
    </section>
  )
}
