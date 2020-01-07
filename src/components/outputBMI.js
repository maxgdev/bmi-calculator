import React from 'react';

export default function OutputBMI({ height, weight, bmiValue }) {
    return (
        <>
            <h2>BMI Value</h2>
            <p className='bmivalue'>{bmiValue}</p>
            <p>Based on height of {height * 100}cm and weight of {weight} kg</p>
        </>
    )
}