import React from 'react'
import "./Menu.css"
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='Menu'>
            <label htmlFor='menuBtn'>x</label>
            <input type='button' id='menuBtn' />
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>
    )
}
