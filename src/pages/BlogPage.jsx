import HeaderComponent from "../components/HeaderComponent"

function BlogPage() {
  const handlesubmit =(e)=>{
    e.preventDefault();
    console.log("El formulario se ha enviado");
  }
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <div>BlogPage</div>
    <h1>FORMULARIO #01234</h1>
    <form onSubmit={handlesubmit}>
      <fieldset>
      <label htmlFor="username ">Nombre</label>
      <input type="text" id="username"/>
      </fieldset>
      <fieldset>
      <label htmlFor="comentario">Comentario</label>
      <input type="text" id="comentario" />
      </fieldset>
      <button>Enviar</button>
    </form>
    </>
  )
}

export default BlogPage