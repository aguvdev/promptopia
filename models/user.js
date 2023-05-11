import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

// El objeto "models" es proporcionado por la biblioteca de Mongoose y almacena todos los modelos registrados.
// Si ya existe un modelo llamado "User" en el objeto "models", asigna ese modelo existente a la variable "User".
// Esto evita la redefinición del modelo y garantiza que se reutilice el modelo existente.

// Si no existe un modelo llamado "User" en el objeto "models", se llama a la función "model" de Mongoose para crear un nuevo modelo.
// El modelo recién creado se asigna a la variable "User".

const User = models.User || model("User", UserSchema);

export default User;
