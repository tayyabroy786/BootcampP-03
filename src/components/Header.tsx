import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="buddy-header">
      <div className="main-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-9 col-xs-12">
              <nav className="main-menu">
                <ul>
                  <li className="active">
                    <Link to='/'>Home</Link>
                  </li>
                  <li className="active">
                    <Link to='/'>About</Link>
                  </li>
                  <li className="active">
                    <Link to='/'>Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}