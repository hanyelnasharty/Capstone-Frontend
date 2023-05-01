import React from 'react';
import { Link } from 'react-router-dom';

const Gharbia = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Gharbia</h1></div>
            
            <h2>About</h2>
            <p>Gharbia is a governorate (province) located in the northern part of Egypt. Its capital city is Tanta, which is located about 90 km north of Cairo. Gharbia is one of the smaller governorates in Egypt, with a total area of approximately 1,942 square kilometers and a population of around 5.6 million people (as of 2021).
</p>
            <h2>Brief History</h2>
            <p>The economy of Gharbia is mainly based on agriculture, with cotton, wheat, and rice being the main crops grown in the region. The governorate is also known for its textile industry, as well as its production of food products such as cheese and other dairy products.
            <br/>
            <br/>
            Gharbia is home to several historical and cultural landmarks, including the Mosque of El Sayeda Zeinab, which is considered one of the most important religious sites in the region. The governorate is also known for its traditional festivals and celebrations, such as the annual Moulid of Sheikh el-Sayed el-Badawy in Tanta, which attracts thousands of visitors from all over Egypt.
            <br/>
            <br/> 
            The region that is now known as Gharbia has a long and rich history dating back to ancient times. During the Pharaonic era, the area was part of the Nile Delta region and was known for its fertile land and abundant crops. Later, during the Greco-Roman period, the city of Tanta, which is now the capital of Gharbia, was an important center for trade and commerce.
            <br/>
            <br/>
            In the Islamic era, Gharbia became an important center for Islamic learning and scholarship. The city of Tanta was home to several prominent scholars and theologians, and the region as a whole played an important role in the development of Islamic thought and culture.
            During the Ottoman period, Gharbia was part of the larger province of Egypt, and the region saw significant economic and cultural development. In the late 19th and early 20th centuries, the region became an important center for the Egyptian nationalist movement, with many of the country's leading thinkers and activists hailing from Gharbia.
            <br/>
            <br/>
            Today, Gharbia is a thriving region with a rich cultural heritage and a strong sense of community and tradition. Its history and legacy continue to shape the region and its people, and Gharbia remains an important part of Egypt's cultural and historical identity.</p>
            <h2>Popular Sightings</h2>
            <ol>
            <h3>The City of Samanoud:</h3>
                <div className='sightings'>
                    <img src='https://icstravelgroup.com/destinations/wp-content/uploads/2021/07/Luxor-01-e1627379042769.jpg' alt='' id='sight'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/SamannudNileBank.jpg' alt='' id='sight' />
                    <img src='https://icstravelgroup.com/destinations/wp-content/uploads/2021/07/Luxor-01-e1627379042769.jpg' alt='' id='sight'/>
                </div>
                <p>This city is located in the northern part of Gharbia, and is known for its historical significance and beautiful architecture. It is home to several important landmarks, including the Monastery of Saint Abanoub and the Church of Saint George.</p>
                <h3>Al Buhayrah Lake:</h3>
                <div className='sightings'>
                    <img src='https://www.etltravel.com/wp-content/uploads/2021/10/lake-marun-bahariya-oasis-053.jpg' alt='' id='sight'/>
                    <img src='https://mediaaws.almasryalyoum.com/news/large/2017/10/27/736700_0.JPG' alt='' id='sight' />
                    <img src='https://mediaaws.almasryalyoum.com/news/large/2017/10/27/736699_0.JPG' alt='' id='sight'/>
                </div>
                <p>This large freshwater lake is located in the northern part of Gharbia and is a popular destination for fishing and boating. It is also home to several important bird species, making it a popular destination for birdwatching.</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Gharbia