import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import footerUrls from '../../src/assets/footer.json'


export default class Footer extends Component {
  render() {
    return (
      <footer className='bg-primary '>
            <nav className='fixed flex min-w-full justify-center bottom-0 index-x-0 p-3 gap-4 list-none bg-lightPurple text-white'> 
                    {footerUrls.map((footer) => (
                        <li key={footer.id}>
                            <Link to={footer.url} target={footer['target-type']} >{footer.title}</Link>
                        </li>
                    ))}
            </nav>
      </footer>
    )
  }
}
