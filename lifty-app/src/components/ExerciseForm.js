import React, { useState, useEffect } from 'react';

const defaultData = {
    name: ''
};

export default ({ onSubmit, exercise }) => {

    const [data, setData] = useState(exercise || defaultData);

    useEffect(() => {
        !!exercise && setData(exercise);
    }, [exercise]);

    const changeHandler = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        onSubmit && onSubmit(data);
        setData(defaultData);
    };

    return (
        <form onSubmit={submit} className="exercise-form">
            <input
                name="name"
                onChange={changeHandler}
                value={data.name}
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
};
