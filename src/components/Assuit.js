import React from 'react';
import { Link } from 'react-router-dom';

const Assuit = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Assuit</h1></div>
            
            <h2>About</h2>
            <p>Assiut Governorate in southern Egypt has a rich history that goes back to ancient times. It was a significant trade and textile production center during the Pharaonic era, and later, an important hub of Islamic scholarship and culture. Despite economic and social challenges, it remains a vital part of Egypt's heritage with many historical landmarks and attractions. The governorate has a population of about 5.3 million people and covers an area of 25,926 square kilometers.</p>
            <h2>Brief History</h2>
            <p>Assiut Governorate is one of the oldest inhabited regions in Egypt, with evidence of human settlement dating back to prehistoric times. During the Pharaonic era, Assiut was known for its production of textiles and its strategic location on the Nile River, which made it an important center for trade and transportation. The city of Assiut also played a significant role in the worship of the goddess Wadjet, and several temples dedicated to her were built in the region.
            <br/>
            <br/>
            During the Islamic era, Assiut became an important center of Islamic learning and scholarship. The city was home to several prominent religious figures, including the renowned scholar and jurist Ibn Al-Qasim, who was instrumental in the development of Islamic law. Assiut also played a significant role in the spread of Sufism, a mystical form of Islam that emphasizes spiritual practice and devotion.
            <br/>
            <br/>
            In modern times, Assiut has faced significant economic and social challenges. The governorate is one of the poorest regions in Egypt, with high rates of poverty and unemployment. However, efforts have been made in recent years to improve the economic situation, including investments in infrastructure and the establishment of new industries. Despite these challenges, Assiut remains an important cultural and historical center, with numerous landmarks and attractions that reflect its rich heritage.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>The Temple of Wadjet:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kom_Ombo_Temple_Surgical_instruments.JPG/800px-Kom_Ombo_Temple_Surgical_instruments.JPG' alt='' id='sight'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/KomOmboMedic-PM228-229.jpg' alt='' id='sight' />
                    <img src='http://www.art-and-archaeology.com/egypt/egy22-15.jpg' alt='' id='sight'/>
                </div>
                <p>This ancient temple is dedicated to the goddess Wadjet and is one of the most important historical landmarks in the governorate.</p>
                <h3>Assiut National Museum:</h3>
                <div className='sightings'>
                    <img src='https://cairoscene.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/1156557/964e0bb4-8dfb-4aeb-b692-a43068bd1fd1.jpg' alt='' id='sight'/>
                    <img src='https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.ANJ.57168940.7055475/4982996.jpg' alt='' id='sight' />
                    <img src='https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.ANJ.15168940.7055475/4982972.jpg' alt='' id='sight'/>
                </div>
                <p>This museum houses a collection of artifacts from the Pharaonic, Islamic, and Coptic eras, as well as exhibits on the history and culture of the governorate.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Assuit