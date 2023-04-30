import React from 'react';
import { Link } from 'react-router-dom';

const Fayoum = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Fayoum</h1></div>
            <h2>About</h2>
            <p>Fayoum Governorate is located in the western part of the Nile Delta, about 100 kilometers southwest of Cairo, Egypt's capital. It covers an area of about 1,827 square kilometers and has a population of around 3.17 million people, according to the 2017 census. Fayoum Governorate is known for its natural and cultural beauty, as well as its agricultural importance.</p>
            <h2>Brief History</h2>
            <p>Fayoum governorate, located in the western desert of Egypt, has a rich and diverse history dating back to ancient times. It was once known as Crocodilopolis during the Pharaonic era, and later became known as Arsinoe during the Ptolemaic and Roman eras. During the Islamic period, it became an important center of agriculture and trade.
            <br/>
            <br/>
            Fayoum is home to a number of important archeological sites, including the Pyramid of Hawara, which was built during the 12th Dynasty and is believed to have been the tomb of King Amenemhat III. Another important site is the Pyramid of Meidum, which dates back to the 4th Dynasty and is believed to have been the tomb of King Huni.
            <br/>
            <br/>
            During the Coptic period, the city of Fayoum became an important center of Christianity in Egypt, and several important monasteries were established in the area. The Monastery of Saint Anthony, which is still in use today, was founded in the 4th century and is one of the oldest Christian monasteries in the world.
            <br/>
            <br/>
            In modern times, Fayoum has become an important center of agriculture, known for its production of fruits, vegetables, and cotton. The governorate is also home to several important tourist attractions, including the Fayoum Oasis, which is known for its scenic beauty and wildlife, and Wadi El-Hitan, a UNESCO World Heritage site that is home to a number of prehistoric fossils.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>Wadi El-Rayan:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%D9%88%D8%A7%D8%AF%D9%89_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D9%86_%D8%A7%D9%84%D9%81%D9%8A%D9%88%D9%85.jpg/220px-%D9%88%D8%A7%D8%AF%D9%89_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D9%86_%D8%A7%D9%84%D9%81%D9%8A%D9%88%D9%85.jpg' alt='' id='sight'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Wadi_El-Rayyan%2C_Fayoum%2C_Egypt_%283%29.jpg/284px-Wadi_El-Rayyan%2C_Fayoum%2C_Egypt_%283%29.jpg' alt='' id='sight' />
                    <img src='https://www.privatetoursinegypt.com/uploads/Wadi-El-Rayan.jpg' alt='' id='sight'/>
                </div>
                <p>A beautiful protected area and UNESCO World Heritage site, featuring two large lakes and waterfalls, as well as unique sand dunes and rock formations.</p>
                <h3>Qaroun Lake:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Qaraoun_Lake.jpg/264px-Qaraoun_Lake.jpg' alt='' id='sight'/>
                    <img src='https://medomed.org/wp-content/uploads/2017/06/Fayoum-egypt.jpg' alt='' id='sight' />
                    <img src='https://images.memphistours.com/large/334556815_Lake%20Qaroun.jpg' alt='' id='sight'/>
                </div>
                <p>The largest natural lake in Egypt and a popular destination for bird-watching and fishing.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Fayoum