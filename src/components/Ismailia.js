import React from 'react';
import { Link } from 'react-router-dom';

const Ismailia = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Ismailia</h1></div>
            
            <h2>About</h2>
            <p>Ismailia is a city located in northeastern Egypt, situated on the west bank of the Suez Canal. It is the capital of the Ismailia Governorate and has a population of around 400,000 people. The city was founded in 1863 during the construction of the Suez Canal, and was named after Khedive Ismail, the ruler of Egypt at the time. Ismailia played an important role in the development of the canal, serving as a headquarters for the French and British engineers who oversaw its construction.</p>
            <h2>Brief History</h2>
            <p>Ismailia was founded in 1863 during the construction of the Suez Canal. The canal was a major engineering feat that was commissioned by the ruler of Egypt at the time, Khedive Ismail, and was designed to connect the Mediterranean Sea to the Red Sea, providing a faster shipping route between Europe and Asia.
            <br/>
            <br/>
            During the construction of the canal, Ismailia served as a headquarters for the French and British engineers who oversaw the project. It was strategically located near the midpoint of the canal, and played a key role in the movement of goods and personnel during its construction.
            <br/>
            <br/>
            After the completion of the canal in 1869, Ismailia became an important hub for shipping and transportation, and quickly grew into a bustling city. It was also the site of several important events in Egyptian history, including the 1919 Revolution against British colonial rule, which saw Ismailia become a center of resistance against British rule.
            <br/>
            <br/>
            During the 20th century, Ismailia continued to develop as an important industrial and transportation center, with a thriving economy that was driven by manufacturing, tourism, and agriculture. It was also the site of several major infrastructure projects, including the construction of the Ismailia Canal, which helped to irrigate the surrounding farmland and increase agricultural production in the region.
            <br/>
            <br/>
            Today, Ismailia remains an important center of industry, transportation, and culture in Egypt, and continues to play a key role in the country's economy and history.</p>
            <h2>Popular Sightings</h2>
            <ol>
            <h3>The Ismailia Museum:</h3>
                <div className='sightings'>
                    <img src='https://english.ahram.org.eg/Media/News/2017/3/4/2017-636241919969244172-924.png' alt='' id='sight'/>
                    <img src='https://titn.ai/wp-content/uploads/2022/08/متحف-الإسماعيلية-القومي.jpg' alt='' id='sight' />
                    <img src='https://img.wataninet.com/2017/03/unnamed-812.jpg' alt='' id='sight'/>
                </div>
                <p>This museum is dedicated to the history of the city of Ismailia, as well as the construction of the Suez Canal. It features exhibits on the canal's history, as well as artifacts from ancient Egyptian history.</p>
                <h3>The De Lesseps House :</h3>
                <div className='sightings'>
                    <img src='https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2020-02/De-Lesseps-House.jpg?' alt='' id='sight'/>
                    <img src='https://i.ebayimg.com/images/g/uYoAAOSwLDVhSz3u/s-l1600.jpg' alt='' id='sight' />
                    <img src='https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2020-02/De-Lesseps-House.jpg?' alt='' id='sight'/>
                </div>
                <p>This historic building was once the residence of Ferdinand de Lesseps, the French diplomat who oversaw the construction of the Suez Canal. Today, it is a museum that showcases the life and accomplishments of de Lesseps.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Ismailia