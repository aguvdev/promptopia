import Link from "next/link";

// Definición del componente Form
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-W-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span> {/* Renderiza el tipo de post */}
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
      </p> {/* Renderiza una descripción del tipo de post */}

      <form
        onSubmit={handleSubmit} /* Maneja la función de envío del formulario */
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span> {/* Renderiza una etiqueta de texto para el campo de entrada */}

          <textarea
            value={post.prompt} /* Asigna el valor del campo "prompt" al valor del textarea */
            onChange={(e) => setPost({
              ...post,
              prompt: e.target.value
            })} /* Actualiza el estado del componente con el nuevo valor del textarea */
            placeholder="Write your prompt here..." /* Renderiza un texto de marcador de posición */
            required /* Hace que el campo sea obligatorio */
            className="form_textarea" /* Asigna una clase CSS al textarea */
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
            <span className="font-normal">(#product, #webdevelopment, #idea)</span>
          </span> {/* Renderiza una etiqueta de texto para el campo de entrada de etiqueta */}

          <input
            value={post.tag} /* Asigna el valor del campo "tag" al valor del input */
            onChange={(e) => setPost({
              ...post,
              tag: e.target.value
            })} /* Actualiza el estado del componente con el nuevo valor del input */
            placeholder="#tag" /* Renderiza un texto de marcador de posición */
            required /* Hace que el campo sea obligatorio */
            className="form_input" /* Asigna una clase CSS al input */
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link> {/* Renderiza un enlace para cancelar el formulario */}

          <button
            type="submit" /* Define el tipo de botón como "submit" */
            disabled={submitting} /* Desactiva el botón si se está enviando el formulario */
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type} {/* Renderiza el texto del botón dependiendo del estado de envío */}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form;
