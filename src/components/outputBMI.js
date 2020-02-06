import React from 'react';

export default function OutputBMI({ height, weight, bmiValue }) {

    function displayBMIStatus(bmiValue){
        let bmiStatus = '';
        if (bmiValue > 29.9) {
            bmiStatus = 'Obese';
        } else if (bmiValue > 25){
            bmiStatus = 'Overweight';
        } else if(bmiValue > 18.4) {
            bmiStatus = 'Ideal';
        } else {
            bmiStatus = 'Underweight';
        }
        return bmiStatus;
    }
    return (
        <>
            <h2>BMI Value: {bmiValue}</h2>
            <strong className={displayBMIStatus(bmiValue)}>{`Your are ${displayBMIStatus(bmiValue)}`}</strong>
            <p>Based on height of {height}cm and weight of {weight} kg</p>
            <p>Based on height of {(height * 0.0328084).toFixed(2)} feet and weight of  { (weight * 2.204).toFixed(2)} lbs</p>
        </>
    )
}