import { Link } from "react-router-dom"
import React from "react";
/*
const Navbar =()=>
{
      return (
            <div>
                  <Link to="./">Home</Link>
                  <Link to="./Work">Work</Link>
                  <Link to="./Projects">Projects</Link>
            </div>
      );
}
*/

const Navbar =()=>
{
      return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                  <a className="navbar-brand" href="./">
                        Peter Kang
                  </a>
                  <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                  >
                        <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                              <li className="nav-item active">
                                    <a className="nav-link" href="./#">
                                          Home
                                    </a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="./#/Work">
                                          Work
                                    </a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="./#/Projects">
                                          Projects
                                    </a>
                              </li>
                        </ul>
                  </div>
                   <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                  >
                        <a className="dropdown-item" href="./Home">
                              Home
                        </a>
                        <a className="dropdown-item" href="./Work">
                              Work
                        </a>
                        <a className="dropdown-item" href="./Projects">
                              Projects
                        </a>
                  </div>
            </nav>
      )
}

export default Navbar;