import {Link, NavLink} from 'react-router-dom'

import React, {useState} from 'react';

const Nav=()=>{
    const [menuOpen, setMenuOpen] = useState(false)
    
    
    
    return(
        <>
    <nav>
        <li><Link to='/' className='title'>
        Home</Link></li>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
        <span></span>
        <span></span>
        <span></span>

        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to='/Produtos' className="produtos">Produtos</NavLink></li>
        <li><NavLink to='Contato'>Contato</NavLink></li>
        <li><NavLink to='/Sobre'>Sobre</NavLink></li>
       </ul>
    </nav>
        </>
    

    );
}
export default Nav