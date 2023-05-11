import mongoose from "mongoose"; // Importamos el módulo mongoose para interactuar con MongoDB

let isConnected = false; // Variable para realizar un seguimiento del estado de la conexión

export const connectToDB = async () => { // Definición de la función connectToDB como una función asíncrona
  mongoose.set('strictQuery', true); // Configuramos strictQuery en true para consultas estrictas

  if (isConnected) { // Verificamos si ya está conectado a la base de datos
    console.log('MongoDB is already connected'); // Mostramos un mensaje indicando que ya está conectado
    return; // Salimos de la función
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { // Conectamos a la base de datos utilizando la URL de conexión y las opciones de configuración
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true; // Establecemos isConnected en true para indicar que la conexión fue exitosa
    console.log('MongoDB connected'); // Mostramos un mensaje indicando que la conexión se realizó correctamente
  } catch (error) {
    console.log(error); // Capturamos y mostramos cualquier error que ocurra durante la conexión
  }
};
