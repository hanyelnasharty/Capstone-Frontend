import React from 'react';
import { Link } from 'react-router-dom';

const Aswan = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Aswan</h1></div>
            <h2>About</h2>
            <p>Aswan Governorate is a province located in Upper Egypt with an area of approximately 62,726 square kilometers. It has a rich and diverse history dating back to prehistoric times, serving as an important center of trade and commerce during the Pharaonic era. Aswan is home to many important historical landmarks and archaeological sites, including the Temple of Philae and the Abu Simbel temples. In the modern era, Aswan played a significant role in Egypt's industrialization and development through the construction of the Aswan Dam. Aswan Governorate is a major tourist destination in Egypt, known for its cultural and natural attractions, traditional crafts, and vibrant community. The population of Aswan Governorate is approximately 1.4 million people.</p>
            <h2>Brief History</h2>
            <p>Aswan Governorate is located in Upper Egypt and covers an area of approximately 62,726 square kilometers. The area has been inhabited since prehistoric times and was an important center of trade and commerce during the Pharaonic era. In ancient times, Aswan was known as Swenet and was the southernmost city in Egypt, serving as a gateway to Nubia and the African continent. The governorate was strategically located on the Nile River and served as a transit point for goods traveling between Africa and the Mediterranean world.
            <br/>
            <br/>
            Aswan was also an important center of Islamic culture and scholarship, with many mosques, madrasas, and zawiyas located throughout the governorate. The governorate is home to many important historical landmarks and archaeological sites, including the Temple of Philae, the Unfinished Obelisk, and the Abu Simbel temples, which date back to the Pharaonic era.
            <br/>
            <br/>
            In the modern era, Aswan played a significant role in Egypt's industrialization and development. The Aswan Dam, which was completed in 1970, is one of the largest dams in the world and has provided electricity and irrigation water to the surrounding areas. The governorate is also home to many large-scale agricultural projects, such as the Toshka Project, which aims to transform the desert into fertile farmland.
            <br/>
            <br/>
            Today, Aswan Governorate is a major tourist destination in Egypt, with many visitors drawn to the area's rich history, culture, and natural beauty. The governorate is also an important center of traditional crafts, such as weaving, pottery, and basket-making, which have been practiced in the area for centuries. Aswan is home to a vibrant and diverse community of people, including Nubians, Bedouins, and other ethnic groups. The population of Aswan Governorate is approximately 1.4 million people.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>Abu Simbel temples:</h3>
                <div className='sightings'>
                    <img src='https://www.worldhistory.org/img/r/p/1000x1200/1008.jpg.webp?v=1670437384' alt='' id='sight'/>
                    <img src='https://cdn.britannica.com/27/178127-050-3C447D4F/statues-entrance-Ramses-II-Great-Temple-Aswan.jpg' alt='' id='sight' />
                    <img src='https://cdn.britannica.com/19/182319-050-41F9F36A/Mural-reliefs-hall-Small-Temple-Aswan-Egypt.jpg' alt='' id='sight'/>
                </div>
                <p>Two massive rock temples commissioned by Pharaoh Ramesses II, famous for their intricate carvings and historical significance.</p>
                <h3>Temple of Philae:</h3>
                <div className='sightings'>
                    <img src='https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/philae-temple,-philae-island.jpg' alt='' id='sight'/>
                    <img src='https://egypttravelblog.com/wp-content/uploads/2021/02/Philae-Isis-Temple-Shutterstock-copy.jpg' alt='' id='sight' />
                    <img src='https://images.squarespace-cdn.com/content/v1/56c13cc00442627a08632989/1572791907263-P7KGNIZR9F08TVO0ZCUO/philaefromwater.JPG?format=750w' alt='' id='sight'/>
                </div>
                <p>An ancient temple complex dedicated to the goddess Isis, located on an island in the Nile River.</p>
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

export default Aswan