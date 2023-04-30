import React from 'react';
import { Link } from 'react-router-dom';

const Menofia = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Menofia</h1></div>
            
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est lorem. Feugiat vivamus at augue eget arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum. Auctor elit sed vulputate mi sit. Viverra mauris in aliquam sem fringilla ut. Metus dictum at tempor commodo ullamcorper a.</p>
            <h2>Brief History</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est lorem. Feugiat vivamus at augue eget arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum. Auctor elit sed vulputate mi sit. Viverra mauris in aliquam sem fringilla ut. Metus dictum at tempor commodo ullamcorper a.</p>
            <h2>Popular Sightings</h2>
            <ol>
            <h3>Nubian villages:</h3>
                <div className='sightings'>
                    <img src='https://vacaywork.com/wp-content/uploads/2020/04/nubia2.jpg' alt='' id='sight'/>
                    <img src='https://www.kevinandamanda.com/wp-content/uploads/2019/08/nubia-aswan-egypt-01.jpg' alt='' id='sight' />
                    <img src='https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/e2/59/66.jpg' alt='' id='sight'/>
                </div>
                <p>Traditional villages inhabited by the Nubian people, known for their unique culture, colorful houses, and handicrafts.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Menofia