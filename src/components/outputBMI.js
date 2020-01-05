import React from 'react';



export default function OutputBMI({ height, weight }) {
    return (
        <>
            <h2>BMI Value</h2>
            <p className='bmivalue'>{(weight / (height * height)).toFixed(2)}</p>
            <p>Based on height of {height * 100}cm and weight of {weight} kg</p>
        </>
    )
}