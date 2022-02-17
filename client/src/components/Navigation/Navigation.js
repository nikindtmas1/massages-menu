import React from 'react'

const Navigation = () => {
  return (
    <nav className="wrapper">
    <ul className="menu">
      <li>
        <a className="active" href="index.html">
          About us
        </a>
      </li>
      <li>
        <a href="services.html">Services</a>
      </li>
      <li>
        <a href="therapies.html">Therapies</a>
      </li>
      <li>
        <a href="staff.html">Our Staff</a>
      </li>
      <li className="last-item">
        <a href="contacts.html">Contacts</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation