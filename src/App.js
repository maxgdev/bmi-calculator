import React, { useState, useEffect } from 'react';
import GetHeader from './components/getHeader';
import GetInput from './components/getInput';
import OutputBMI from './components/outputBMI';
import './App.css';

// https://www.ramsayhealth.co.uk/weight-loss-surgery/bmi/bmi-formula
// If you are 175cm (1.75m) in height and 75kg in weight, you can calculate your BMI as follows:
// 75kg / (1.75m²) = 24.49kg/m²

function App() {

  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(85);
  const [bmi, setBMI] = useState('');
  
  function setHeightFn(height) {
    setHeight(height);
    return height;
  }

  function setWeightFn(weight) {
    setWeight(weight);
    return weight;
  }

  function calculateBMI(weight, height) {
    let mHeight = height /100;
    return (weight / (mHeight * mHeight)).toFixed(2);
  }

  useEffect(()=> {
    setBMI(calculateBMI(weight, height));
  }, [weight, height])

  return (
    <div className="App">
      <div className="bmiCard">
        <GetHeader />
        <GetInput height={height} weight={weight} hfn={setHeightFn} wfn={setWeightFn}/>
        <OutputBMI height={height} weight={weight} bmiValue={bmi}/>
      </div>
    </div>
  );
}

export default App;
