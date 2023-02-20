import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>
        <p>ToDo</p>
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>Sign</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header