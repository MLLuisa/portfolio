import proyect1 from '../images/proyect1.png';
import { NavLink } from 'react-router-dom';

const ProyectOne = () => {
    return (
    <NavLink to='/proyectOne' >
        <img src={proyect1} alt="proyectOne" className='proyectOne'/>
    </NavLink>
    )
}

export default ProyectOne;