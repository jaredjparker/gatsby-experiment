import React from 'react'
import Header from '../components/Header'
import { Link } from 'gatsby'

export default function about() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Header pageTitle={'About'} />
        </div>
    )
}
