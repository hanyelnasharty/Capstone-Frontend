import React from 'react';
import { Link } from 'react-router-dom';

const Benisuef = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Benisuef</h1></div>
            <h2>About</h2>
            <p>Beni Suef Governorate is located in the central region of Egypt and covers an area of approximately 1,322 square kilometers. It is home to a population of over 3 million people and is known for its agricultural productivity, with crops including wheat, cotton, and vegetables.</p>
            <h2>Brief History</h2>
            <p>Beni Suef Governorate is a region in Egypt that has a rich and diverse history, with evidence of human settlement dating back thousands of years. The governorate was once part of the ancient Egyptian civilization, and there are still numerous historical landmarks and artifacts that serve as a testament to the area's significance during that time.
            <br/>
            <br/>
            In the Islamic era, Beni Suef was a key center for trade and commerce. The region was an important stop on the trade route between Cairo and Upper Egypt, and it was during this time that many of the city's famous markets and bazaars were established. As a result of its strategic location, Beni Suef was often a target of attacks and raids by various groups throughout history.
            <br/>
            <br/>
            During the Arab-Israeli War of 1948, Beni Suef was a significant site for battles, with the governorate playing an important role in the conflict. The city was one of the few regions that remained under Egyptian control, and it was a base for the Egyptian army during the war.
            <br/>
            <br/>
            Today, Beni Suef is a thriving center for agriculture, with its fertile land and proximity to the Nile River making it an important hub for crop production. The governorate is known for its production of cotton, wheat, and various types of vegetables. Additionally, Beni Suef has several historical landmarks and attractions that draw tourists from around the world.
            <br/>
            <br/>
            One of the most famous sites in Beni Suef is the Pyramid of Meidum, an ancient pyramid that dates back to the Old Kingdom period of Egypt. The pyramid is a testament to the region's importance during ancient times, and it is a popular attraction for tourists who are interested in ancient history. Another popular landmark in the governorate is the Coptic Monastery of St. Macarius, which is one of the oldest monasteries in Egypt. The Beni Suef Museum is also a must-visit attraction for anyone interested in the history and culture of the region. The museum houses a vast collection of artifacts that date back to ancient times, as well as exhibits that showcase the local culture and traditions of the governorate.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>Beni Suef Museum:</h3>
                <div className='sightings'>
                    <img src='https://images.squarespace-cdn.com/content/v1/6057ea63deb56a28d188d74e/1627098081269-TJDXTG9Y8GZ5DCA4W3ML/11882294_819738648139566_1111224193555418280_o.jpg?format=1000w' alt='' id='sight'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/1/1c/BeniSuefMuseumCoffin.jpg?20121113233204' alt='' id='sight' />
                    <img src='https://www.egypttaxitransfer.com/wp-content/uploads/2021/09/1-1-1170x670.jpg' alt='' id='sight'/>
                </div>
                <p>This museum showcases the history of the governorate through a range of artifacts, including ancient Egyptian relics, Coptic Christian artifacts, and Islamic art.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Benisuef