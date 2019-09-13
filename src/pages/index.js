import React from "react"
import Header from '../components/Header'

export default () => (
    <div style={{ color: `purple` }}>
        <a href='./about'>About</a>
        <Header pageTitle={'Home'} />
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
