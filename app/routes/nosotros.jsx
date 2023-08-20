import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return[
    {
      title: 'GuitarLa - Sobre Nosotros',
      description: 'venta de guitarras y mas'
    }
  ]
}


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt='imagen sobre nosotros'/>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed maiores repudiandae unde quidem nemo soluta sit, architecto quas, iusto perspiciatis adipisci odio ut. Ipsum neque sed accusamus delectus necessitatibus eaque?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed maiores repudiandae unde quidem nemo soluta sit, architecto quas, iusto perspiciatis adipisci odio ut. Ipsum neque sed accusamus delectus necessitatibus eaque?
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros