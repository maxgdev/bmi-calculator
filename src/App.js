import React, { useState, useEffect } from 'react';
import GetHeader from './components/getHeader';
import GetInput from './components/getInput';
import OutputBMI from './components/outputBMI';
import './App.css';

// https://www.ramsayhealth.co.uk/weight-loss-surgery/bmi/bmi-formula
// If you are 175cm (1.75m) in height and 75kg in weight, you can calculate your BMI as follows:
// 75kg / (1.75m²) = 24.49kg/m²

function App() {

  const [bmi, setBMI] = useState('');
  let height = 1.75;
  let weight = 75;

  useEffect(()=> {
    setBMI((weight / (height * height)).toFixed(2));
  }, [])

  return (
    <div className="App">
      <GetHeader />
      <GetInput />
      <OutputBMI height={height} weight={weight} bmiValue={bmi}/>
    </div>
  );
}

export default App;
