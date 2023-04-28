import React from 'react';
import { Link } from 'react-router-dom';

const Dakahlia = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Dakahlia</h1></div>
            
            <h2>About</h2>
            <p>Dakahlia Governorate is located in the eastern part of the Nile Delta, in Egypt. Its capital is the city of Mansoura. The governorate has an area of 3,472 square kilometers and a population of around 6 million people. It is known for its fertile soil and agricultural production, particularly in cotton and rice. The governorate has a rich history dating back to ancient times, with archaeological sites such as the Pharaonic Temple of Buto and the Greco-Roman city of Tell Timai.</p>
            <h2>Brief History</h2>
            <p>Dakahlia Governorate has a rich history that dates back to ancient times. It was a part of the ancient Egyptian administrative division known as the "20th Nome of Lower Egypt." During the Islamic era, Dakahlia was a center for Islamic learning, with prominent scholars living and teaching in the region.
            <br/>
            <br/>
            Under the rule of the Ottoman Empire, Dakahlia played a significant role in the country's agricultural production, particularly in cotton cultivation. The region's fertile soil and proximity to the Nile River made it an ideal location for agriculture.
            <br/>
            <br/>
            In the modern era, Dakahlia Governorate played an active role in the Egyptian Revolution of 1919 against British colonial rule. The governorate witnessed several protests and strikes against the British occupation, with many of its residents joining the national movement.
            <br/>
            <br/>
            Today, Dakahlia Governorate is one of the most densely populated areas in Egypt, with a population of over 6 million people. It remains an important center for agriculture, particularly in the production of cotton, wheat, and rice. It also has a growing industrial sector, with several factories and industrial zones located in the governorate.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>The City of Talkha:</h3>
                <div className='sightings'>
                    <img src='https://egyptopia.com/shared/images/z/middle/z_el-mansura-city-in-el-dakahlia-_4359.jpg' alt='' id='sight'/>
                    <img src='https://egyptopia.com/shared/images/z/middle/z_el-mansura-city-in-el-dakahlia-_4359.jpg' alt='' id='sight' />
                    <img src='https://egyptopia.com/shared/images/z/middle/z_el-mansura-city-in-el-dakahlia-_4359.jpg' alt='' id='sight'/>
                </div>
                <p>This historic city is known for its beautiful architecture and ancient monuments, including the Talkha Pharaonic temple and the Talkha Museum.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Dakahlia