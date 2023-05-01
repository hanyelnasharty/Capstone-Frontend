import React from 'react';
import { Link } from 'react-router-dom';

const Alsharqiya = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Al-Sharqiya</h1></div>
            
            <h2>About</h2>
            <p>Al-Sharqia Governorate is located in the eastern Nile Delta region of Egypt and has a rich history dating back to ancient times. It's known for its traditional crafts, vibrant culture, and beautiful architecture. Today, the governorate is home to over 6 million people and is one of the most populous in Egypt. Despite facing challenges such as poverty and unemployment, Al-Sharqia Governorate remains an important part of Egypt's national identity.</p>
            <h2>Brief History</h2>
            <p>Al-Sharqia Governorate is located in the eastern part of the Nile Delta region of Egypt. It was formed in 1949 when the former Gharbia Governorate was divided into two separate governorates. The governorate has a long history, with evidence of human settlement dating back to the prehistoric period.
            <br/>
            <br/>
            Throughout ancient Egyptian history, the region was an important center for agriculture and trade. During the Islamic period, the area saw the construction of many mosques, palaces, and other important buildings. In the modern era, the governorate has played an important role in Egypt's economic development, with agriculture and industry being major contributors to the local economy.
            <br/>
            <br/>
            The governorate is home to several important historical and cultural landmarks, including the city of Zagazig, which is known for its beautiful architecture and vibrant culture. The governorate is also famous for its traditional crafts, including weaving and pottery.
            <br/>
            <br/>
            Today, Ash Sharqia Governorate is home to over 6 million people and is one of the most populous governorates in Egypt. Despite facing challenges such as poverty and unemployment, the governorate is known for its rich history and cultural heritage and remains an important part of Egypt's national identity.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>Al-Azhar Mosque in Zagazig:</h3>
                <div className='sightings'>
                    <img src='https://data.agatetravel.com/images/photogallery/2020/al-azhar-mosque-in-cairo.jpg' alt='' id='sight'/>
                    <img src='https://www.egypttoday.com/siteimages/Larg/6849.jpg' alt='' id='sight' />
                    <img src='https://images.memphistours.com/large/e0f6d802bafe70e93377fa26aa997cec.jpg' alt='' id='sight'/>
                </div>
                <p>A beautiful mosque located in the heart of Zagazig city. It features stunning Islamic architecture and is considered an important religious site.</p>
                <h3>Al-Masalla Obelisk in Bilbeis:</h3>
                <div className='sightings'>
                    <img src='https://i.pinimg.com/originals/fc/86/1d/fc861dc29c63fb1e5440346508613a95.jpg' alt='' id='sight'/>
                    <img src='https://collections.lib.uwm.edu/digital/api/singleitem/image/agsafrica/5355/default.jpg' alt='' id='sight' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/c/c8/CairoObeliskSesostris1.jpg' alt='' id='sight'/>
                </div>
                <p>A well-preserved obelisk made from red granite that stands at over 20 meters tall. It is believed to date back to the reign of Pharaoh Thutmose III.</p>
                <h3>Al-Hakim Mosque in Al-Husseiniya:</h3>
                <div className='sightings'>
                    <img src='https://egymonuments.gov.eg/media/1044/4.jpg?anchor=center&mode=crop&width=645&height=423&rnd=133065066420000000' alt='' id='sight'/>
                    <img src='https://www.islamicarchitecturalheritage.com/wp-content/uploads/2020/06/al-hakim-mosque.jpg' alt='' id='sight' />
                    <img src='https://egypttimetravel.com/wp-content/uploads/2022/02/Al-Hakim-Mosque-at-Cairo.jpg' alt='' id='sight'/>
                </div>
                <p>An impressive mosque built in the 11th century during the Fatimid Caliphate. It is known for its unique architectural style and beautiful decorations.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Alsharqiya