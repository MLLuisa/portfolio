import proyect1 from '../images/proyect1.png';

const ProyectOne = () => {
    return (<>
        <div className='wrapper-project-one'>
        <a href='https://github.com/MLLuisa/modulo-1-evaluacion-final-MLLuisa' target='blank' title='click here to see the webpage'>
        <img src={proyect1} alt="proyectOne" className='proyectOne'/>
        </a>
        <p className='description-projects'>Virtual shop | HTML, CSS, SCSS, web responsive</p>
        </div>
        </>
    )
}

export default ProyectOne;