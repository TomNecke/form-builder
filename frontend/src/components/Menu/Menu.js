import React from 'react'
import "./Menu.css"
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='Menu'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>
    )
}
