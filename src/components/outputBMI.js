import React from 'react';

export default function OutputBMI({ height, weight, bmiValue }) {
    let bmiTest = 24.5; // Dummy test values

    function displayBMIStatus(){
        let bmiStatus = '';
        if (bmiTest > 50) {
            bmiStatus = 'Obese';
        } else if (bmiTest > 40){
            bmiStatus = 'Overweight';
        } else if(bmiTest > 22) {
            bmiStatus = 'the correct weight';
        } else {
            bmiStatus = 'Underweight';
        }
        return bmiStatus;
    }
    return (
        <>
            <h2>BMI Value: {bmiValue}</h2>
            <strong>{`Your are ${displayBMIStatus()}`}</strong>
            <p>Based on height of {height * 100}cm and weight of {weight} kg</p>
            <p>Based on height of {(height * 100 * 0.0328084).toFixed(2)} feet and weight of  { (weight * 2.204).toFixed(2)} lbs</p>
        </>
    )
}