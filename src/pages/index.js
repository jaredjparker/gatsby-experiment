import React from "react"
import Header from '../components/Header'
import { Link } from 'gatsby'

export default () => (
    <div style={{ color: `purple` }}>
        <Link to='./about'>About</Link>
        <Link to='./contact'>Contact</Link>
        <Header pageTitle={'Home'} />
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
