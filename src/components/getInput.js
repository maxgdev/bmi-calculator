import React from  "react";

export default function GetInputs({ height, weight, hfn, wfn}) {

    return (
        <div className='inputClass'>
            <p>Enter height (cm)</p>
                <input
                    type="number"
                    placeholder="Height"
                    name="height"
                    value={height}
                    onChange={e => hfn(e.target.value)}
                />
            <p>Enter weight (kg)</p>
            <input
                    type="number"
                    placeholder="Weight"
                    name="weight"
                    value={weight}
                    onChange={e => wfn(e.target.value)}
                />
        </div>
    )
}