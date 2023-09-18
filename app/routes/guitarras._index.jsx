import { useLoaderData, Outlet, useOutletContext } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css';
import ListadoGuitarras from "~/components/listado-guitarras";
import { useContext } from "react";


export function meta() {
  return [
    {
      title: 'GuitarLA - Tienda de Guitarras',
      descripcion: 'GuitarLA - Nuestra Coleccion de Guitarras' 
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader() {

  const guitarras = await getGuitarras()



  return guitarras.data

}

function Tienda() {

  const guitarras = useLoaderData();
  

  return (
    <main className="contenedor">

      <ListadoGuitarras
        guitarras={guitarras}
      />  

      <Outlet
        context={useOutletContext()}
      />    

    </main>
  )
}

export default Tienda