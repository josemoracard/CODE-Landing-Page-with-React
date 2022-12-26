import React from "react";

const Navbar= () => {
    return (
        
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
             <a className="navbar-brand" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
              </button>
  <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-link" href="#">About</a>
      <a className="nav-link" href="#">Services</a>
      <a className="nav-link">Contact</a>
    </div>
  </div>
  </div>
</nav>

    )
}


export default Navbar;