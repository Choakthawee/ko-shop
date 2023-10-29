import './rov.css';
import videoBg from '../images/Halloween.mp4';


const Rov = () => {
    return (
        <div className="rovScreen">
            <video autoPlay loop muted className='video-bg'>
                <source src={videoBg} type='video/mp4' />
            </video>
        </div>
    )
}

export default Rov;