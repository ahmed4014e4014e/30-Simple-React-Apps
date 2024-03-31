/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function NavItem({text, active="", onClick}) {
  return (
    <li className="nav-item">
      <a href="#" className={`nav-link ${active}`} onClick={onClick}>
        {text}
      </a>{" "}
    </li>
  )
}
