import React from 'react';
import { Link } from 'react-router-dom';

const Giza = (props) => {
    return (
        <>
            <div className='banner'><h1 className='gov-head'>Giza</h1></div>
            
            <h2>About</h2>
            <p>Giza is a city located in the Giza Governorate in Egypt, near the southwestern suburbs of Cairo. It is most famous for the Giza Plateau, which is home to the Great Pyramid of Giza, one of the Seven Wonders of the Ancient World. The Giza Plateau also contains the two other large pyramids, as well as several smaller pyramids, temples, and other structures associated with the pharaohs of the Fourth Dynasty of Egypt. The area around Giza has been continuously inhabited since ancient times and is an important cultural and historical center in Egypt.</p>
            <h2>Brief History</h2>
            <p>The history of Giza goes back to ancient times. The area around Giza has been continuously inhabited since prehistoric times, with evidence of settlements dating back to the fourth millennium BCE. The city was an important center of administration and culture during the Old Kingdom period of Ancient Egypt (2686-2181 BCE).
            <br/>
            <br/>
            The Giza Plateau was the site of the construction of the three largest and most famous pyramids in Egypt: the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure. These pyramids were built during the Fourth Dynasty of the Old Kingdom, between the 26th and 25th centuries BCE. They were constructed as tombs for the pharaohs and their consorts, and were surrounded by smaller pyramids and other structures for their families and officials.
            <br/>
            <br/>
            During the Middle Kingdom (2055-1650 BCE), the importance of Giza waned, and the pyramids were largely abandoned. However, the area continued to be used for burials, and some smaller pyramids and tombs were built there during the Middle Kingdom and the New Kingdom (1550-1070 BCE).
            <br/>
            <br/>
            In the Late Period (664-332 BCE), Giza regained some of its importance as a religious and cultural center. Temples and other structures were built there, and the site was visited by pilgrims and travelers. The Greeks and Romans also visited Giza, and the site became known to the wider world as a center of ancient Egyptian culture and history.
            <br/>
            <br/>
            In modern times, Giza has become a suburb of Cairo, and the Giza Plateau remains an important cultural and historical site, attracting tourists and scholars from around the world. The pyramids and other structures of Giza continue to fascinate and inspire people today, thousands of years after their construction.</p>
            <h2>Popular Sightings</h2>
            <ol>
            <h3>Nubian villages:</h3>
                <div className='sightings'>
                    <img src='https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids_2x1.jpg' alt='' id='sight'/>
                    <img src='https://storage.googleapis.com/pod_public/1300/154513.jpg' alt='' id='sight' />
                    <img src='https://images.prismic.io/mystique/24d6af7e-53ba-47c4-baef-da7de5b49130_86c7e78d-48e2-4414-9c99-60c5ca83c906-13944-cairo-skip-the-line-tickets---pyramids-of-giza-01.webp?auto=compress,format&rect=0,0,1200,750&w=1200&h=750' alt='' id='sight'/>
                </div>
                <p>One of the Seven Wonders of the Ancient World, the pyramids of Giza are a must-see destination in Cairo. Visitors can explore the pyramids, take a camel ride, and learn about the history of the pharaohs.</p>
                <h3>Solar Ship Museum:</h3>
                <div className='sightings'>
                    <img src='https://images.memphistours.com/large/f261c3ec23d988743c0587c376afa688.jpg' alt='' id='sight'/>
                    <img src='https://egyptsites.files.wordpress.com/2009/02/boat-2.jpg?w=584' alt='' id='sight' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0d/By_ovedc_-_Khufu_ship_-_18.jpg' alt='' id='sight'/>
                </div>
                <p>The Giza Solar boat museum was dedicated to display the reconstructed Khufu ship, a solar barque of pharaoh Khufu. It was constructed between 1961 and 1982, just a few meters from where the Khufu ship was found, on the southern side of the Great Pyramid, on the Giza Plateau in Egypt</p>
            </ol>
            <h4 className='rec'>Know something we missed? <Link to='/recommendations'>Click here </Link>and add it and it could be featured!</h4>
        </>
        
    )
}

export default Giza