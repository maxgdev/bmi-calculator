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
            <h2  className={displayBMIStatus(bmiValue)}>BMI Value: {bmiValue}</h2>
            <h3>
                <strong className={displayBMIStatus(bmiValue)}>{`Your are ${displayBMIStatus(bmiValue)}`}</strong>
            </h3>
            <p>Based on height of {height}cm ({(height * 0.0328084).toFixed(2)} feet)</p>
            <p>Based on weight of {weight} kg ({ (weight * 2.204).toFixed(2)} lbs)</p>
        </>
    )
}