const Header = () => {
  return (
    <div>

<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a href="/" className="navbar-brand" style={{"margin-left" : '7%'}}>Todo</a>
    <form className="d-flex" role="search" style={{"margin-right" : '5%'}}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-dark" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Header