import ProyectOne from './ProyectOne';
import ProyectTwo from './ProyectTwo';
import ProyectThree from './ProyectThree';
import GroupOne from './GroupOne';
import GroupTwo from './GroupTwo';
import GroupThree from './GroupThree';


const Main = () => {
    return (<>
    <div className='main'>
        <h3 className="title-proyects">This are some of my projects ⬇️</h3>
        <div className='proyect-wrapper'>
            <ProyectOne />
            <ProyectTwo />
            <ProyectThree />
            <GroupOne />
            <GroupTwo />
            <GroupThree />
        </div>
    </div>
        </>

    
    )
}

export default Main;