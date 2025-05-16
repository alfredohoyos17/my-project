import "./HeaderComponent.css"
function HeaderComponent(){
  return(
    <header className="header">
      <h1 className="title">Welcome</h1>
      <nav>
        <ul className="link-list">
          <li>
            <span className="link">Home</span>
          </li>
          <li>
            <span className="link">Bloge</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent