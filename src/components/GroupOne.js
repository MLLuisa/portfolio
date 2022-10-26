import group1 from '../images/group1.png';

const GroupOne = () => {
    return (
    <div className='wrapper-group-one'>
    <a href='https://github.com/MLLuisa/project-promo-q-module-1-team-3' target='blank' title='click here to see the webpage'>
    <img src={group1} alt="groupOne" className='groupOne'/>
    </a>
    <p className='description-projects'>Tecnocats | HTML, SCSS, web responsive</p>
    </div>
    )
}

export default GroupOne;