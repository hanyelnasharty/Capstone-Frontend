import React from "react"
import ReactPlayer from 'react-player'

const Blog = () => {
    return (
        <>
            <div className="blog-container">
                <ReactPlayer
                url={'/videos/luxor.mp4'} 
                controls={true} 
                height='500px'
                width='280px'
                className="video"
                />
            </div>
           
        </>
    )
}

export default Blog