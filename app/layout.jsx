// Importar archivo global de estilos
import "@styles/globals.css";

// Importar componente Nav
import Nav from '@components/Nav';
// Importar componente Provider
import Provider from '@components/Provider';

export const metadata = {
  // Título del sitio web
  title: "Promptopia",
  // Descripción del sitio web
  description: "Discover & Share AI Prompts" 
};

// Crear componente RootLayout que recibe prop children
const RootLayout = ({ children }) => {
  return (
    <html lang="en"> {/* Agregar lenguaje de la página */}
      <body>
        <div className="main"> {/* Crear contenedor principal */}
          <div className="gradient" /> {/* Crear gradiente de fondo */}
        </div>

        {/* Crear contenedor de la aplicación */}
        <main className="app"> 
          {/* Agregar componente Nav */}
          <Nav />
          {/* Mostrar contenido hijo */}
          {children}
        </main>
      </body>
    </html>
  );
};

// Exportar componente RootLayout
export default RootLayout;
