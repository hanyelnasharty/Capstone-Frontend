import React from "react"
import ReactPlayer from 'react-player'

const Blog = () => {
    return (
        <>
                 <ReactPlayer
             url={'/videos/luxor.mp4'} 
             controls={true} 
             height='500px'
             width='280px'
             className="video"
             />
        </>
    )
}

export default Blog