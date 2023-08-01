import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pages from '../../src/assets/pages.json';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className='flex justify-center p-3 gap-4 list-none bg-primaryColor text-white'> 
                {pages.map((page) => (
                    <li key={page.id}>
                        <Link to={page.url}>{page.title}</Link>
                    </li>
                ))}
        </nav>
      </header>
    )
  }
}
