import React from 'react'

const Navbar = () => {
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsMonkey</a>
    {/* <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/general">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/technology">Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }


export default Navbar
