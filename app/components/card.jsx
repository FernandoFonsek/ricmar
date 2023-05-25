import Image from 'next/image';
import styles from "./card.module.css"
export function Card ({imagen, id, description, name}) {
    return(
        <section key={id} className={styles.card}>
                <Image
                className={styles.card__image}
                src={imagen}
                width={50}
                height={50}
                alt={name}
                />
            <p className={styles.card__description}>{description}</p>
        </section>
    )
}