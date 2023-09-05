import {Link, useLocation} from '@remix-run/react'

function Navegacion() {

    const location = useLocation();

  return (
    <nav className="navegacion">
                <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                >Inicio</Link>
                <Link
                    to="/nosotros"
                    className={location.pathname === '/nosotros' ? 'active' : ''}
                >Nosotro</Link>
                <Link
                    to="/guitarras"
                    className={location.pathname === '/guitarras' ? 'active' : ''}
                >Tienda</Link>
                <Link
                    to="/posts"
                    className={location.pathname === '/posts' ? 'active' : ''}
                >Blog</Link>
            </nav>
  )
}

export default Navegacion