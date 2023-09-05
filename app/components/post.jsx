import { Link } from "@remix-run/react";
import { formatearfecha } from "~/utils/helpers";

export default function Post({post}) {


    const {contenido, titulo, url , publishedAt} = post;


  return (
    <article className="post">
        <img className="imagen" src={titulo} alt={titulo}/>
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearfecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}
