import './apex.css';
import videoBg from '../images/Halloween.mp4';

const Apex = () => {
    return (
        <div className="apexScreen">
            <video autoPlay loop muted className='video-bg'>
                <source src={videoBg} type='video/mp4' />
            </video>
        </div>
    )
}

export default Apex;