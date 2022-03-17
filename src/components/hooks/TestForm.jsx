import React, { useState } from 'react';

const TestForm = () => {
    const [valueChange, setValueChange] = useState('')
    const [valueSubmit, setValueSubmit] = useState('')

    const handleChange = (e) => {
        setValueChange(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setValueSubmit(e.target.text1.value)
    }

    return (
        <div>
            <h1>React Hooks Form</h1>
            <form data-testid='form' action="" onSubmit={handleSubmit}>
                <label htmlFor="text1">Input Text:</label>
                <input type="text" id='text1' onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
            <h3>React State</h3>
            <p>Change: {valueChange}</p>
            <p>Submit Value: {valueSubmit}</p>
        </div>
    );
};

export default TestForm;