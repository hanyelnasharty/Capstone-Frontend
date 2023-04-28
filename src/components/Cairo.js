import React from 'react';
import { Link } from 'react-router-dom';

const Cairo = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Cairo</h1></div>
            <h2>About</h2>
            <p>Cairo is the capital and largest city of Egypt, as well as its most populous urban area and metropolitan area. The governorate of Cairo includes the city of Cairo and some surrounding areas. The total area of Cairo governorate is approximately 3,085 square kilometers. The history of Cairo dates back to the Roman Empire, with the city later becoming a prominent center of Islamic civilization. Today, Cairo is known for its vibrant culture, historic landmarks such as the Pyramids of Giza and the Sphinx, as well as its bustling markets, museums, and diverse cuisine. The population of Cairo governorate is estimated to be around 9 million people.</p>
            <h2>Brief History</h2>
            <p>Cairo governorate, located in the northeast of Egypt, has a long and rich history. It was founded in the 10th century by the Fatimid caliphs and became the capital of Egypt in the 16th century during the Ottoman Empire. Throughout its history, Cairo has been a center of learning, culture, and trade in the Middle East. It was home to many of the world's most renowned scholars, writers, and artists. The city is also famous for its historic landmarks, such as the Pyramids of Giza, the Sphinx, and the Citadel of Saladin.
            <br/>
            <br/>
            In the 19th and 20th centuries, Cairo underwent major changes and modernization efforts. The city expanded with new suburbs and neighborhoods, and became a hub for political and social movements in Egypt. Cairo played a central role in the 2011 Egyptian Revolution, which led to the ousting of former President Hosni Mubarak.
            <br/>
            <br/>
            Today, Cairo is a vibrant metropolis with a population of over 9 million people, making it the most populous city in Egypt and the Middle East. The city is a cultural and economic center, with many universities, museums, galleries, and businesses. Despite its rapid development and modernization, Cairo retains much of its historic charm and continues to attract visitors from around the world.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>The Great Pyramids:</h3>
                <div className='sightings'>
                    <img src='https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza-and%20camels-2.jpg'alt='' id='sight'/>
                    <img src='https://d.newsweek.com/en/full/699341/khufus-pyramid-aerial-view.webp?w=790&f=a22a5d3ed4e0e9f4e2dff53718b5137b' alt='' id='sight' />
                    <img src='pyramids.png' alt='' id='sight'/>
                </div>
                <p>One of the Seven Wonders of the Ancient World, the pyramids of Giza are a must-see destination in Cairo. Visitors can explore the pyramids, take a camel ride, and learn about the history of the pharaohs.</p>
                <h3>The Egyptian Museum:</h3>
                <div className='sightings'>
                    <img src='https://images.adsttc.com/media/images/6077/f0c5/f91c/81f9/7400/04e3/slideshow/wGEM01_Render-Translucent_Stone_Wall_Night_875_460.jpg?1618473148' alt='' id='sight'/>
                    <img src='https://media.timeout.com/images/105894246/750/422/image.jpg' alt='' id='sight' />
                    <img src='https://amayei.nyc3.digitaloceanspaces.com/2022/12/34DEE7C6-68B1-49AA-B5EA-06C1751845D0.jpeg' alt='' id='sight'/>
                </div>
                <p>This museum is home to the largest collection of ancient Egyptian artifacts in the world. Visitors can see King Tutankhamun's treasures, mummies, and other historical artifacts.</p>
                <h3>Citadel of Salah El-Din:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flickr_-_HuTect_ShOts_-_Citadel_of_Salah_El.Din_and_Masjid_Muhammad_Ali_%D9%82%D9%84%D8%B9%D8%A9_%D8%B5%D9%84%D8%A7%D8%AD_%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%D8%A7%D9%84%D8%A3%D9%8A%D9%88%D8%A8%D9%8A_%D9%88%D9%85%D8%B3%D8%AC%D8%AF_%D9%85%D8%AD%D9%85%D8%AF_%D8%B9%D9%84%D9%8A_-_Cairo_-_Egypt_-_17_04_2010_%284%29.jpg/250px-thumbnail.jpg' alt='' id='sight'/>
                    <img src='http://www.cairo.gov.eg/ar/Imp%20Information/tourism_pictures/cultural/salah%20al-%20din%20citadel/al%20qal3a1.jpg' alt='' id='sight' />
                    <img src='http://www.cairo.gov.eg/ar/Imp%20Information/tourism_pictures/cultural/salah%20al-%20din%20citadel/al%20qal3a2.jpg' alt='' id='sight'/>
                </div>
                <p>A medieval fortress that has stood since the 12th century, the Citadel of Salah El-Din is a popular destination for tourists. Visitors can explore the fortress, see the Mosque of Mohamed Ali, and enjoy great views of the city.</p>
                <h3>Al-Muizz Street:</h3>
                <div className='sightings'>
                    <img src='http://www.cairo.gov.eg/ar/Bank%20of%20Ideas/PublishingImages/Thaqafa_Fnoon/1-TARE5_cairo/STREETS/elmo3z2.jpg' alt='' id='sight'/>
                    <img src='https://www.noonpost.com/sites/default/files/styles/article_node_page_image_563_x_400_/public/field/image/1521457402htzos.jpg?itok=00EuN0Ex' alt='' id='sight' />
                    <img src='https://vcdn.visit.guide/RAC.php?src=18044289071635765903.jpg&w=830&h=550' alt='' id='sight'/>
                </div>
                <p>This historic street is home to some of Cairo's most beautiful Islamic architecture, including the Mosque of Al-Hakim and the Mosque of Ibn Tulun. Visitors can explore the street on foot, see the beautiful buildings, and learn about the history of Islamic Cairo.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Cairo