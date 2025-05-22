import HeaderComponent from "../components/HeaderComponent"

function BlogPage() {
  const handlesubmit =(e)=>{
    e.preventDefault();
    console.log("El formulario se ha enviado");
  }
  return (
    <>
      <HeaderComponent />
      <div className="blog-container">
        <div>BlogPage</div>
        <h1>FORMULARIO INFORMATIVO</h1>
        <div className="form-container">
          <form onSubmit={handlesubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="comentario">Comentario</label>
              <input type="text" id="comentario" name="comentario" />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default BlogPage