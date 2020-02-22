import React from  "react";
import TextField from '@material-ui/core/TextField';

export default function GetInputs({ height, weight, hfn, wfn}) {
    return (
        <div className='inputClass'>
            <TextField 
                type="number"
                label="Height (cm)"  
                fullWidth={false}
                name="height"
                value={height}
                onChange={e => hfn(e.target.value)}
            />
            <div className="divider">
            </div>
            <TextField 
               type="number"
               label="Weight (Kg)"
               name="weight"
               value={weight}
               onChange={e => wfn(e.target.value)}
            />
        </div>
    )
}