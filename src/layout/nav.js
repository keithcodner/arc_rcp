import React from 'react'
import { NavLink } from 'react-router-dom'

const navs = [
    {
        path:"/",
        name:"CockPit"
    },
    {
        path:"/settings",
        name:"Settings"
    },
    {
        path:"/controls",
        name:"Configure Controls"
    },
    {
        path:"/register",
        name:"Register Robot"
    },
    {
        path:"/registerUser",
        name:"Create User"
    }
    
]

const Nav = () => (
    <div>
        <nav className="bg-blue-600 p-4 text-white shadow">
            <ul className="flex space-x-4 justify-start">
                <li>ARC CONTROL PANEL</li>
            </ul>
            <ul className="flex space-x-4 justify-end">
                {navs.map((navItem) => (
                    <li><NavLink exact to={navItem.path} activeClassName="border-b border-white">{navItem.name}</NavLink></li>
                ))}
            </ul>
        </nav>
    </div>
)

export default Nav;