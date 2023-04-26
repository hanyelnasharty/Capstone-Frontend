import React from 'react';
import { Link } from 'react-router-dom';

const Luxor = (props) => {
    return (
        <>
            <div className='banner'></div>
            <h1>This is Luxor!</h1>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est lorem. Feugiat vivamus at augue eget arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum. Auctor elit sed vulputate mi sit. Viverra mauris in aliquam sem fringilla ut. Metus dictum at tempor commodo ullamcorper a.</p>
            <h2>Brief History</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est lorem. Feugiat vivamus at augue eget arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum. Auctor elit sed vulputate mi sit. Viverra mauris in aliquam sem fringilla ut. Metus dictum at tempor commodo ullamcorper a.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <li>The Great Pyramids:</li>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est lorem. Feugiat vivamus at augue eget arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum. Auctor elit sed vulputate mi sit. Viverra mauris in aliquam sem fringilla ut. Metus dictum at tempor commodo ullamcorper a.</p>
                <li>The Egyptian Museum</li>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est lorem. Feugiat vivamus at augue eget arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum. Auctor elit sed vulputate mi sit. Viverra mauris in aliquam sem fringilla ut. Metus dictum at tempor commodo ullamcorper a.</p>
            </ol>
            <h4>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it!</h4>
        </>
        
    )
}

export default Luxor