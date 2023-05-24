import Image from 'next/image'
import styles from './page.module.css'
import { Card } from './components/card'
//import logo
import logo from "../app/assets/home/home.jpg"
import { Navigation } from './components/navigation'

const dataCard = [
  {
    "id": "001",
    "imagen": logo,
    "description": "No esperes más para vivir una experiencia de bienestar excepcional. Descubre los beneficios de la maderoterapia.",
    "name":"madero-terapia" 
  },
  {
    "id": "002",
    "imagen": logo,
    "description": "No esperes más para vivir una experiencia de bienestar excepcional. Descubre los beneficios de la maderoterapia.",
    "name":"madero-terapia" 
  },
  {
    "id": "003",
    "imagen": logo,
    "description": "No esperes más para vivir una experiencia de bienestar excepcional. Descubre los beneficios de la maderoterapia.",
    "name":"madero-terapia" 
  },
  {
    "id": "003",
    "imagen": logo,
    "description": "No esperes más para vivir una experiencia de bienestar excepcional. Descubre los beneficios de la maderoterapia.",
    "name":"madero-terapia" 
  },
  {
    "id": "003",
    "imagen": logo,
    "description": "No esperes más para vivir una experiencia de bienestar excepcional. Descubre los beneficios de la maderoterapia.",
    "name":"madero-terapia" 
  },
  {
    "id": "003",
    "imagen": logo,
    "description": "No esperes más para vivir una experiencia de bienestar excepcional. Descubre los beneficios de la maderoterapia.",
    "name":"madero-terapia" 
  },
]
export default function Home() {
  return (
    <main className={styles.main}>

      <h1>Name Company</h1>
      {
        dataCard.map(item => 
        (
        <Card
        {...item}/>
        ))
    }
    </main>
  )
}
