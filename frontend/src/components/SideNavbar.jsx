import React from 'react'

const SideNavbar = () => {
  return (
    <div>
        <nav id="navbar-example3" className="navbar bg-light flex-column align-items-stretch p-3">
  <a className="navbar-brand" href="/">Navbar</a>
  <nav className="nav nav-pills flex-column">
    <a className="nav-link" href="#item-1">Item 1</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
      <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav>
    <a className="nav-link" href="#item-2">Item 2</a>
    <a className="nav-link" href="#item-3">Item 3</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
      <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav>
  </nav>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" tabindex="0">
  <div id="item-1">
    <h4>Item 1</h4>
    <p>...</p>
  </div>
  <div id="item-1-1">
    <h5>Item 1-1</h5>
    <p>...</p>
  </div>
  <div id="item-1-2">
    <h5>Item 1-2</h5>
    <p>...</p>
  </div>
  <div id="item-2">
    <h4>Item 2</h4>
    <p>...</p>
  </div>
  <div id="item-3">
    <h4>Item 3</h4>
    <p>...</p>
  </div>
  <div id="item-3-1">
    <h5>Item 3-1</h5>
    <p>...</p>
  </div>
  <div id="item-3-2">
    <h5>Item 3-2</h5>
    <p>...</p>
  </div>
</div>

    </div>
  )
}

export default SideNavbar