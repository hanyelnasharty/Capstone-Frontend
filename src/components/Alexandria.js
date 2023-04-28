import React from 'react';
import { Link } from "react-router-dom";

const Alexandria = (props) => {
    return (
        <>
            <div className='banner-alex'><h1 className='gov-head'>Alexandria</h1></div>
            <h2>About</h2>
            <p>Alexandria Governorate is a northern coastal region of Egypt, with a population of over 5 million people. It was founded by Alexander the Great in 331 BC and has a rich history as a center of culture, learning, and trade. Today, it's a bustling metropolis that combines its historic past with modern amenities, making it a popular destination for tourists. The governorate is home to many significant historical sites, including the Bibliotheca Alexandrina, and is renowned for its beautiful beaches, vibrant culture, and delicious cuisine. With its unique blend of ancient and modern, Alexandria Governorate is a must-visit destination for anyone interested in exploring the rich history and culture of Egypt.</p>
            <h2>Brief History</h2>
            <p>Alexandria Governorate is located in the northern region of Egypt, along the Mediterranean coast. The history of Alexandria dates back to 331 BC, when it was founded by Alexander the Great. The city quickly became a center of culture, learning, and trade, and was renowned for its magnificent architecture and impressive library.
            <br/>
            <br/>
            Throughout the centuries, Alexandria played a significant role in many historical events. It served as the capital of Egypt during the Hellenistic period and was a major center of Christian scholarship during the early centuries of the Common Era. The city also played a crucial role in the Arab conquest of Egypt in the 7th century AD.
            <br/>
            <br/>
            During the medieval era, Alexandria experienced a decline in its political and cultural significance, but it remained an important trading hub and center of commerce. It was a vital port city, connecting Egypt with the rest of the Mediterranean world.
            <br/>
            <br/>
            In the modern era, Alexandria has undergone significant development and is now a bustling metropolis with a population of over 5 million people. It is home to many significant historical sites, such as the Bibliotheca Alexandrina, which was built in 2002 to commemorate the ancient library that once stood in the city. The governorate is also renowned for its beautiful beaches, historic landmarks, and vibrant culture.
            <br/>
            <br/>
            Today, Alexandria Governorate is a vibrant and cosmopolitan region that combines a rich cultural heritage with modern amenities and attractions. It continues to attract visitors from all over the world, who come to explore its fascinating history and experience its unique blend of ancient and modern culture.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>Bibliotheca Alexandrina:</h3>
                <div className='sightings'>
                    <img src='bibliotheca-alexandrina1.jpeg' alt='' id='sight'/>
                    <img src='bibliotheca-alexandrina2.jpg' alt='' id='sight' />
                    <img src='bibliotheca-alexandrina3.jpeg' alt='' id='sight'/>
                </div>
                <p>This modern library was built in 2002 to commemorate the ancient library of Alexandria. It's a striking piece of architecture and houses a vast collection of books and manuscripts.</p>
                <h3>Citadel of Qaitbay:</h3>
                <div className='sightings'>
                    <img src='citadel1.jpeg' alt='' id='sight'/>
                    <img src='citadel2.jpeg' alt='' id='sight' />
                    <img src='citadel3.jpeg' alt='' id='sight'/>
                </div>
                <p>This historic fortress was built in the 15th century by the Mamluk sultan Qaitbay. It's located on the Mediterranean Sea and offers stunning views of the water.</p>
                <h3>Montazah Palace:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Egypt-14A-148_-_Al-Montazah_Palace_%282216757121%29.jpg/800px-Egypt-14A-148_-_Al-Montazah_Palace_%282216757121%29.jpg' alt='' id='sight'/>
                    <img src='https://www.islamicarchitecturalheritage.com/wp-content/uploads/2020/06/montaza-palace.jpg' alt='' id='sight' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Alexandria-MontazahPalace.jpg/800px-Alexandria-MontazahPalace.jpg?20171110215851' alt='' id='sight'/>
                </div>
                <p>This beautiful palace and gardens were once the summer residence of the Egyptian royal family. It features a stunning blend of Ottoman and Florentine architecture.</p>
                <h3>Pompey's Pillar:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/AlexSarapeionPompeysPillar.jpg' alt='' id='sight'/>
                    <img src='https://egypt.travel/media/1682/mg_7633-final_pompeys_pillar1.jpg' alt='' id='sight' />
                    <img src='https://images.squarespace-cdn.com/content/v1/6057ea63deb56a28d188d74e/1627151663345-5IBC4BZFG6HFFX4W3CWK/Alexandria-Sawary.jpeg?format=1000w' alt='' id='sight'/>
                </div>
                <p> This towering granite column is over 25 meters tall and is believed to have been erected in honor of the Roman Emperor Diocletian.</p>
                <h3>Alexandria National Museum:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/GD-EG-Alex-Mus%C3%A9eNat040.JPG/800px-GD-EG-Alex-Mus%C3%A9eNat040.JPG' alt='' id='sight'/>
                    <img src='https://www.franckgoddio.org/fileadmin/_processed_/8/4/csm_01_IEASM_ARCHEOLOGIE_SOUS_MARINE_MNAlex_CG_007_330001dd68.jpg' alt='' id='sight' />
                    <img src='https://luxxata.com/wp-content/uploads/2018/10/Alexandria-National-Museum.jpg' alt='' id='sight'/>
                </div>
                <p>This museum showcases the history of Alexandria, from ancient times to the present day. It features a collection of artifacts and exhibits that offer insight into the city's rich cultural heritage.</p>
                <h3>Anfushi Tombs:</h3>
                <div className='sightings'>
                    <img src='https://mlrhpz8jmuut.i.optimole.com/cb:Ie5o.50122/w:auto/h:auto/q:mauto/https://www.egypttoursplus.com/wp-content/uploads/2014/03/South-east-corner-tombs-of-Anfushi-Alexandria-Photo-by-Roland-Unger.jpg' alt='' id='sight'/>
                    <img src='https://i.ytimg.com/vi/hlObvEJNq5A/0.jpg' alt='' id='sight' />
                    <img src='https://i.ytimg.com/vi/ud13PezwaaE/0.jpg' alt='' id='sight'/>
                </div>
                <p>These ancient tombs date back to the Hellenistic and Roman periods and offer a fascinating glimpse into the city's rich history.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Alexandria