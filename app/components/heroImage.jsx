import Image from "next/image"
import background from "../assets/home/test.jpg"
import styles from "./heroImage.module.css"


export function HeroImage () {
    return(
        <article className={styles.heroImage}>
            <section className={styles.heroImage__content}>
            <h1 className={styles.tittle} >[Nombre del Negocio] </h1>
            <span className={styles.tittle}>    
                Descubre la armonía perfecta entre relajación, rejuvenecimiento y estilo.
            </span>
            <p className={styles.heroImage__description}>Nuestros servicios de masajes y maderoterapia te brindan una experiencia única de relajación y bienestar. En nuestro centro, nos enorgullece ofrecer una variedad de tratamientos diseñados para revitalizar tu cuerpo y mente</p>
            </section>
            <Image
            className={styles.heroImage__image}
            src={background}
            width={100}
            height={100}
            alt="spa"/>
       </article>
    )   
}   
    