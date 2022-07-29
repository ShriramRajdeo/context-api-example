import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context';

const Header = ()=>{
    const [cart] = useContext(CartContext);

    return(
        <>
            <div>
                <div className='heading'>Shpping Cart App - Context Api Example</div>
            </div>
            <div>
                <ul className='nav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart <span>({cart.length})</span></Link></li>
                </ul>
            </div>
        </>
    );
}

export default Header;