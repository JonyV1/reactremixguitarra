import { useLoaderData, Outlet } from "@remix-run/react";
import { getPosts } from "~/models/posts.server"
import ListadoPosts from "~/components/listado-post";
import styles from '~/styles/blog.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta({data}) {

  return [{
    title: `GuitarLA - Nuestro Blog`,
    description: `GuitarraLa , Blog de musica y venta de guitarras`
  }]
}

export async function loader(){
    const posts = await getPosts();
    
    return posts.data
}

function Blog() {

  const posts = useLoaderData();

  return (
    <main className="contenedor">
      
      <ListadoPosts
        posts={posts}
      />

      <Outlet />
      
    </main>
  )
}

export default Blog