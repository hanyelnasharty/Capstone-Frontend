import React, { useState } from 'react'

const Edit = (props) => {

    const [recommendation, setRecommendation] = useState({...props.recommendation})

    const handleChange = (event) => {
        setRecommendation({...recommendation, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(recommendation)
    }

    return ( 
        <>
            <details>
                <summary>Edit</summary>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <br/>
                <input type="text" value={recommendation.name} name="name" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="gov">Government: </label>
                <br/>
                <input type="text" value={recommendation.gov} name="gov" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="description">Description: </label>
                <br/>
                <textarea type='text' value={recommendation.description}  name='description' rows='10' cols='50' onChange={handleChange}/>
                <br/>
                <br/>
                <input type="submit" />
            </form>
            </details>
        </>
    )
}

export default Edit