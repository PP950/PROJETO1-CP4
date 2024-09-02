import {Link} from 'react-router-dom'
const Nav=()=>{
    return(
        <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Produtos'>Produtos</Link></li>
        <li><Link to='Contato'>Contato</Link></li>
        <li><Link to='/Sobre'>Sobre</Link></li>
       </ul>
    </nav>
        </>
    

    );
}
export default Nav