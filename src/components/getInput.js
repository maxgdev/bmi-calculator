import React, { useState } from  "react";

export default function GetInputs({}) {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    return (
        <>
            <p>Enter height</p>
                <input
                    type="number"
                    placeholder="Height"
                    name="height"
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                />
            <p>Enter weight</p>
            <input
                    type="number"
                    placeholder="Weight"
                    name="weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />
        </>
    )
}