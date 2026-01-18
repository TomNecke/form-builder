import React, { useContext } from 'react'
import "./Menu.css"
import { NavLink } from 'react-router-dom'
import { Context } from '../../context/Context'

export default function Menu() {

    const { menu, setMenu } = useContext(Context)

    return (
        <div className='Menu'>
            {menu ? <button id='menuBtn' onClick={() => setMenu(false)} >X</button> :
                <button id='menuBtn' onClick={() => setMenu(true)} >X</button>}
            {menu &&
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            }
        </div>
    )
}
