import React, {useEffect} from 'react';

//Imported assets starts

import vidoe from '../../assets/video/video03.mp4';
import airplaneImg from '../../assets/img/plane5.png';

//Import AOS

import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    //UseEffect to set animation duration
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className='home flex container'>
            <div className="mainText">
                <h1 data-aos='fade-up' data-aos-duration='2500' >Create Ever-lasting Memories with Us</h1>
            </div>

            <div className="homeImages">
                <div className="videoDiv">
                    <video src={vidoe} className="video" autoPlay muted loop ></video>
                </div>
                <img src={airplaneImg} className="plane" alt="plane image" />
            </div>
        </div>
    );
}

export default Home;



