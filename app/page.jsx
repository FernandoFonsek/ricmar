import Image from 'next/image'
import styles from './page.module.css'
import { Card } from './components/card'
//import logo
import logo from "../app/assets/home/home.jpg"
import { HeroImage } from './components/heroImage'

const dataCard = [
  {
    "id": "001",
    "imagen": logo,
    "description": "La maderoterapia es una técnica milenaria que utiliza utensilios de madera especialmente diseñados para masajear y moldear el cuerpo. Con movimientos suaves y precisos, la maderoterapia estimula la circulación sanguínea, reduce la retención de líquidos y tonifica la piel. Disfruta de sus beneficios rejuvenecedores y experimenta una sensación de relajación profunda.",
    "name":"madero-terapia" 
  },
  {
    "id": "002",
    "imagen": logo,
    "description": "Nuestros masajes relajantes son realizados por terapeutas expertos que dominan una amplia gama de técnicas terapéuticas. Mediante movimientos suaves y fluidos, nuestros masajes alivian el estrés acumulado, disminuyen la tensión muscular y promueven la relajación total del cuerpo y la mente. Permítete un momento de descanso y renueva tus energías con nuestras manos expertas.",
    "name":"madero-terapia" 
  },
  {
    "id": "003",
    "imagen": logo,
    "description": "En cuanto a nuestras extensiones de pestañas, ofrecemos una solución perfecta para realzar tu belleza natural. Nuestro equipo de esteticistas altamente capacitadas aplicará meticulosamente extensiones de pestañas pelo a pelo, creando un aspecto elegante y seductor. Ya sea que desees un estilo más natural o un look más dramático, adaptaremos el diseño a tus preferencias y rasgos individuales.",
    "name":"madero-terapia" 
  },
]
export default function Home() {
  return (
    <main className={styles.main}>
      <HeroImage/>
      <section className={styles.services}>
        <div className={styles.services__tittle}>
          <h3>Servicios</h3>
        </div>

      <section id="servicios">
        <div class={styles.services__content}>
          <Image
          className={styles.services__image}
          height={200}
          width={200}
          src={logo}/>
          <p>La maderoterapia es una técnica milenaria que utiliza utensilios de madera especialmente diseñados para masajear y moldear el cuerpo. Con movimientos suaves y precisos, la maderoterapia estimula la circulación sanguínea, reduce la retención de líquidos y tonifica la piel. Disfruta de sus beneficios rejuvenecedores y experimenta una sensación de relajación profunda.</p>
          <Image
          className={styles.services__image}
          height={200}
          width={200}
          src={logo}/>
          <p>Nuestros masajes relajantes son realizados por terapeutas expertos que dominan una amplia gama de técnicas terapéuticas. Mediante movimientos suaves y fluidos, nuestros masajes alivian el estrés acumulado, disminuyen la tensión muscular y promueven la relajación total del cuerpo y la mente. Permítete un momento de descanso y renueva tus energías con nuestras manos expertas.</p>
          <Image
          className={styles.services__image}
          height={200}
          width={200}
          src={logo}/>
          <p>En cuanto a nuestras extensiones de pestañas, ofrecemos una solución perfecta para realzar tu belleza natural. Nuestro equipo de esteticistas altamente capacitadas aplicará meticulosamente extensiones de pestañas pelo a pelo, creando un aspecto elegante y seductor. Ya sea que desees un estilo más natural o un look más dramático, adaptaremos el diseño a tus preferencias y rasgos individuales.</p>
          <p>En [Nombre del Negocio], nos enorgullece ofrecer servicios de calidad en un entorno relajante y acogedor. Nuestro equipo dedicado se asegurará de que tu experiencia sea única y satisfactoria. Nos comprometemos a brindarte resultados excepcionales y superar tus expectativas en cada visita.</p>
  </div>
      </section>

      <section id="terapeutas">
        <div class={styles.professional__content}>
          <div className={styles.services__tittle}>
            <h3>Profesional</h3>
          </div>
          <Image
            className={styles.services__image_professional}
            height={200}
            width={200}
            src={"https://previews.123rf.com/images/michaeljung/michaeljung1105/michaeljung110500013/9526518-masajista-profesional-dando-masaje-herbal-tailand%C3%A9s.jpg"}/>
            <h3>Marcela Profesional Aesthetic</h3>
            <p className={styles.professional__description}> formación especializada y cuentan con años de experiencia en esta técnica. Han perfeccionado su habilidad para utilizar los diferentes instrumentos de madera de manera precisa y efectiva, aplicando las técnicas adecuadas para estimular la circulación, reducir la celulitis y tonificar los músculos. Su experiencia les permite adaptar el tratamiento a las necesidades específicas de cada cliente, obteniendo resultados visibles y duraderos.</p>
        </div>
      </section>
      <section id='galeria'>
        <div>
        <div className={styles.services__tittle}>
            <h3>Galeria</h3>
          </div>
          <article className={styles.galery__content}>
            <div className={styles.galery__content_image}>instalaciones</div>
            <div className={styles.galery__content_image}>maderoterapia</div>
            <div className={styles.galery__content_image}>masajes</div>
            <div className={styles.galery__content_image}>pestañas pelo con peloyo bailo</div>
          </article>
        </div>
      </section>
      {
        dataCard.map(item => 
          (
            <Card
            {...item}/>
            ))
          }
      </section>
    </main>
  )
}
