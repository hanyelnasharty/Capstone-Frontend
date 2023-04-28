import React from 'react';
import { Link } from 'react-router-dom';

const Beheira = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Beheira</h1></div>
            <h2>About</h2>
            <p>Beheira Governorate covers an area of approximately 9,826 square kilometers, located in the Nile Delta region of Egypt. With a population of approximately 6 million people, Beheira is an important center of industry and commerce, home to many cultural landmarks, museums, and galleries showcasing the region's art and culture.</p>
            <h2>Brief History</h2>
            <p>Beheira Governorate is located in the Nile Delta region of Egypt and has a rich and diverse history. The governorate has been inhabited since prehistoric times and played an important role in the development of the Pharaonic civilization. The fertile soil of the Nile Delta made Beheira a major center of agricultural production, and many important cities and towns, such as Tanta and Damanhur, were established in the region. During the Greek and Roman periods, the city of Damanhur served as an important center of trade and commerce. The region was also an important center of Christianity during the early centuries of the Common Era, and many churches and monasteries were built in the area.

            In the Islamic era, Beheira became a center of Islamic learning and scholarship, with many mosques and madrasas (Islamic schools) being established in the region. Beheira was also a site of frequent battles and conflicts, with various conquerors including the Persians, Romans, and Ottomans. During the Ottoman occupation, Beheira was a stronghold of resistance against foreign rule, and many battles were fought in the region during the 19th and 20th centuries.

            Today, Beheira Governorate is home to a number of important cultural landmarks that bear witness to its rich history. These include ancient ruins, mosques, and churches, as well as museums and galleries that showcase the region's art and culture. Beheira is also an important center of industry and commerce, with many factories and businesses operating in the region. The population of Beheira Governorate is approximately 6 million people, making it one of the most populous governorates in Egypt.</p>
            <h2>Popular Sightings</h2>
            <ol>
                <h3>Abu Mena:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Religious_Complex_at_Abu_Mena_%28XIII%29.jpg/800px-Religious_Complex_at_Abu_Mena_%28XIII%29.jpg' alt='' id='sight'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Artifacts_at_Abu_Mena_%28VII%29.jpg/240px-Artifacts_at_Abu_Mena_%28VII%29.jpg' alt='' id='sight' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baths_at_Abu_Mena_%28XXI%29.jpg/240px-Baths_at_Abu_Mena_%28XXI%29.jpg' alt='' id='sight'/>
                </div>
                <p>An ancient Christian pilgrimage site that is now a UNESCO World Heritage Site.</p>
                <h3>Lake Burullus:</h3>
                <div className='sightings'>
                    <img src='https://www.etltravel.com/wp-content/uploads/2021/09/burullus-lake-egypt-050.jpg' alt='' id='sight'/>
                    <img src='https://www.etltravel.com/wp-content/uploads/2021/09/burullus-lake-egypt-052.jpg' alt='' id='sight' />
                    <img src='https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/06/Lake-Burullus-Protectorate.jpg?w=1000&ssl=1' alt='' id='sight'/>
                </div>
                <p>A beautiful lake that is home to many species of birds and fish, as well as a popular destination for fishing and boating.</p>
                <h3>Wadi El-Natrun:</h3>
                <div className='sightings'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Deir_as_Suriani.jpg/250px-Deir_as_Suriani.jpg' alt='' id='sight'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bischoy_Kloster_BW_9.jpg/800px-Bischoy_Kloster_BW_9.jpg' alt='' id='sight' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Frescos_from_the_Wadi_Natrun_monastery1.jpg/800px-Frescos_from_the_Wadi_Natrun_monastery1.jpg' alt='' id='sight'/>
                </div>
                <p>A desert valley that is home to several ancient monasteries and churches, some of which are still in use today.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Beheira