import React from 'react';
import { Link } from 'react-router-dom';

const Damietta = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Damietta</h1></div>
            
            <h2>About</h2>
            <p>Damietta Governorate is located in the northeastern part of the Nile Delta region in Egypt. It has a population of approximately 1.2 million people and an area of around 1,029 square kilometers. The city of Damietta is the capital of the governorate and it is an important commercial and industrial center, known for its furniture industry, cotton trade, and fishing activities.</p>
            <h2>Brief History</h2>
            <p>Damietta Governorate is located in the northeastern part of the Nile Delta region of Egypt. Its history dates back to the Pharaonic era, where it played a significant role in the trade routes connecting the Mediterranean Sea and the Red Sea. The city of Damietta was founded in the 6th century by the Coptic Orthodox Church, and it remained a Christian city until the Arab conquest in 640 AD.
            <br/>
            <br/>
            During the Islamic era, Damietta was a thriving center of trade and commerce, as it was strategically located on the Mediterranean Sea. The city was captured by the Crusaders in the 13th century, but it was later recaptured by the Muslims under the leadership of Sultan Saladin.
            <br/>
            <br/>
            In the Ottoman period, Damietta became a major center for cotton production, and it also played a vital role in the trade routes between Europe and Asia. The city was captured by the French in 1798 during the Napoleonic Wars, but it was later returned to Ottoman rule.
            <br/>
            <br/>
            Today, Damietta is known for its rich cultural heritage and its beautiful natural landscapes, including the Damietta Branch of the Nile River, the Mediterranean Sea, and several parks and nature reserves.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>The Damietta Port:</h3>
                <div className='sightings'>
                    <img src='https://www.presidency.eg/media/97163/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D9%85%D9%8A%D9%86%D8%A7%D8%A1-%D8%AF%D9%85%D9%8A%D8%A7%D8%B7jpg.jpg' alt='' id='sight'/>
                    <img src='https://www.egypttoday.com/siteimages/Larg/11055.jpg' alt='' id='sight' />
                    <img src='https://www.egypttoday.com/siteimages/Larg/71310.jpg' alt='' id='sight'/>
                </div>
                <p>located on the Mediterranean coast, the port is one of the busiest in Egypt and a vital hub for trade and transportation.</p>
                <h3>The Damietta Museum:</h3>
                <div className='sightings'>
                    <img src='https://youimg1.tripcdn.com/target/0ww6e120008yhrroxF0B1_C_900_600_Q70.jpg?proc=source%2ftrip&amp;proc=source%2ftrip' alt='' id='sight'/>
                    <img src='https://youimg1.tripcdn.com/target/0ww6e120008yhrroxF0B1_C_900_600_Q70.jpg?proc=source%2ftrip&amp;proc=source%2ftrip' alt='' id='sight' />
                    <img src='https://youimg1.tripcdn.com/target/0ww6e120008yhrroxF0B1_C_900_600_Q70.jpg?proc=source%2ftrip&amp;proc=source%2ftrip' alt='' id='sight'/>
                </div>
                <p>a small museum located in the city center that displays artifacts from the ancient city of Damietta, including pottery, coins, and jewelry.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Damietta