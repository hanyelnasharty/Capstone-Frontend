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
            <div className="add-container">
                <form onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" htmlFor="name" className="add">Name: </label>
                    <div class="col-sm-2">
                        <input class="form-control" type="text" value={recommendation.name} name="name" onChange={handleChange}/>
                    </div>
                </div>
                <br/>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" htmlFor="gov" className="add">Government: </label>
                    <div class="col-sm-2">
                        <input class="form-control" type="text" value={recommendation.gov} name="gov" onChange={handleChange}/>
                    </div>
                </div>
                <br/>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" htmlFor="description" className="add">Description: </label>
                    <div class="col-sm-6">
                        <textarea class="form-control" type='text' value={recommendation.description}  name='description' rows='10' cols='50' onChange={handleChange}/>
                    </div>
                </div>
                <br/>
                <input type="submit" />
            </form>
                <button onClick={props.hideAdd}>Cancel</button>
            </div>
            
        </>
    )
}

export default Add