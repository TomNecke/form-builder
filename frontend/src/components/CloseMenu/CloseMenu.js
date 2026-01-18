import React, { useContext } from 'react'
import "./CloseMenu.css"
import { Context } from '../../context/Context'

export default function CloseMenu() {

    const { setMenu } = useContext(Context)

    return (
        <div onClick={() => setMenu(false)} className='CloseMenu' ></div>
    )
}
