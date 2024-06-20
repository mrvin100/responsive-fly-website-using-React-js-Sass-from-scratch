import React, {useEffect} from 'react';

//Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

//Imported destination image
import destination1 from '../../assets/img/destination1.jpg';
import destination2 from '../../assets/img/destination2.jpg';
import destination3 from '../../assets/img/destination3.jpg';
import destination4 from '../../assets/img/destination4.jpg';

//Imported user image
import user1 from '../../assets/img/user1.png';
import user2 from '../../assets/img/user2.svg';
import user3 from '../../assets/img/user3.png';
import user4 from '../../assets/img/user4.jpg';

// We are going to use high order array called Map to display all data

const travelers = [
    {
        id: 1,
        destinationImage: destination1,
        travelerImage: user1,
        travelerName: 'IsraTech',
        socialLink: '@isratech8'
    },
    {
        id: 2,
        destinationImage: destination2,
        travelerImage: user2,
        travelerName: 'Wilson Lindsey',
        socialLink: '@wilsonlindsey'
    },
    {
        id: 3,
        destinationImage: destination3,
        travelerImage: user3,
        travelerName: 'Nicole Web',
        socialLink: '@nicoleweb'
    },
    {
        id: 4,
        destinationImage: destination4,
        travelerImage: user4,
        travelerName: 'Naresh Lamer',
        socialLink: '@nareshlamer'
    }
]

const Travelers = () => {
    //UseEffect to set animation duration
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className='travelers container section'>
            <div className="sectionContainer">

                <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>
                
                <div className="travelersContainer grid">
                {
                travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => 
                {
                    return(
                    /* Single passenger card */
                    <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                        <img src={destinationImage} alt="traveler image" className="destinationImage" />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={travelerImage} alt="traveler picture" className='travelerImage' />
                            </div>
                            <div className="travelerName">
                                <span>{travelerName}</span>{socialLink}
                            </div>
                        </div>
                    </div>
                    )
                })
                }
                    
                </div>

            </div>
        </div>
    );
}

export default Travelers;
