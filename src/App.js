import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
const [value,setValue] = useState('')
const [validation,setValidation] = useState([])

const validate = (currentValue) => {
  console.log(currentValue)
  const validationMessages = [];
  if(isNaN(Number(currentValue))) validationMessages.push('only numbers')
  if(Number(currentValue)>10) validationMessages.push('use numbers less then 10')
    if(Number(currentValue)%2 ) validationMessages.push('use odd numbers')
  setValidation(validationMessages)
};

const onChange = (e) => {
  setValue(e.target.value);
  validate (e.target.value)
};


  return (
    <div className="App">
      <input type ="text" value={value}
             onChange={onChange} />
             <ul>
               { validation.map (el => <li key={el}>{el}</li>)}
             </ul>
    </div>
  );
}

export default App;
