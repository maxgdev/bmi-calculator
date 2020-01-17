import React from 'react';

export default function OutputBMI({ height, weight, bmiValue }) {
    return (
        <>
            <h2>BMI Value: {bmiValue}</h2>
            <p>Based on height of {height * 100}cm and weight of {weight} kg</p>
            <p>Based on height of {(height * 100 * 0.0328084).toFixed(2)} feet and weight of  { (weight * 2.204).toFixed(2)} lbs</p>
        </>
    )
}