import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

// Importamos el paquete NextAuth para manejar la autenticación
// Importamos el proveedor de autenticación de Google
// Importamos el modelo de usuario (User) y la función de conexión a la base de datos (connectToDB) desde sus respectivos archivos

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    // Configuramos los proveedores de autenticación disponibles, en este caso solo el proveedor de Google con su clientId y clientSecret

  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email
    })

    // Obtenemos la sesión del usuario y buscamos en la base de datos el usuario correspondiente al email de la sesión

    session.user.id = sessionUser._id.toString();

    // Asignamos el ID del usuario a la sesión

    return session;
  },

  // Configuramos la función session, que se ejecuta cada vez que se crea o actualiza una sesión de usuario

  async signIn({ profile }) {
    try {
      await connectToDB();

      // Conectamos a la base de datos

      // Verificamos si ya existe un usuario con el mismo email en la base de datos
      const userExists = await User.findOne({
        email: profile.email
      })

      // Si no existe un usuario con el mismo email, creamos un nuevo usuario en la base de datos
      if(!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture
        })
      }

      // Retorna true para indicar que el inicio de sesión fue exitoso
      return true;
    } catch (error) {
      console.log(error);
      // En caso de error, imprime el error en la consola y retorna false para indicar que el inicio de sesión fue fallido
      return false;
    }
  }

  // Configuramos la función signIn, que se ejecuta al iniciar sesión
  }

})

export { handler as GET, handler as POST };

// Exportamos el controlador de autenticación como "Get" y "POST" para que pueda ser utilizado en las rutas correspondientes

// Si hay dudas revisa la documentación de NextAuth.js