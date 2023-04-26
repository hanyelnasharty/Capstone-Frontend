import React, { useState } from "react";

const Add = (props) => {
    let emptyRecommendation = {name: '', gov: '', description: ''}
    const [recommendation, setRecommendation] = useState(emptyRecommendation)

    const handleChange = (event) => {
        setRecommendation({...recommendation, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(recommendation)
    }
    return (
        <>
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
        </>
    )
}

export default Add