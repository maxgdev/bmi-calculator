import React, { useState } from 'react';

// https://www.ramsayhealth.co.uk/weight-loss-surgery/bmi/bmi-formula
// If you are 175cm (1.75m) in height and 75kg in weight, you can calculate your BMI as follows:
// 75kg / (1.75m²) = 24.49kg/m²

export default function OutputBMI() {
    const [bmi, setBMI] = useState('');
    let height = 1.75;
    let weight = 75;
    return (
        <>
            <h2>BMI Value</h2>
            <p className='bmivalue'>{(weight / (height * height)).toFixed(2)}</p>
            <p>Based on height of {height * 100}cm and weight of {weight} kg</p>
        </>
    )
}