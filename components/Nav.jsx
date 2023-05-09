// Importar las librerías y componentes necesarios
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  // Comprobar si el usuario ha iniciado sesión
  const isUserLoggedIn = true;

  // Estado para almacenar los proveedores de autenticación
  const [providers, setProviders] = useState(null);

  // Llamada a la API de NextAuth para obtener la lista de proveedores
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProviders();
  }, []);

  return (
    // Estructura del menú de navegación
    <nav className="flex-between w-full mb-16 pt-3">
      {/* Logotipo de Promptopia */}
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Navegación para desktop */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          // Si el usuario ha iniciado sesión, mostrar estos botones
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="profile image"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          // Si el usuario no ha iniciado sesión, mostrar estos botones de inicio de sesión
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>

      {/* Navegación para móvil */}
      {/* TODO: Agregar navegación para móvil */}
    </nav>
  );
};

// Exportar el componente de navegación
export default Nav;
