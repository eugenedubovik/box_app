import React, {useState} from 'react';
import './App.css';
import {Input, Button, Box, BoxContainer} from './components'

function App() {
  const [inputValue, setInputValue] = useState('') 
  const [data, setData] = useState(['join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
  'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
  'forEach', 'map', 'reduce', 'reduceRight', 'filter',
  'some', 'every'])

  const onButtonClick = (e) => {
    e.preventDefault()
    if(filteredData.length === 0) {
        setData([...data, inputValue])
    }
    
  }

  const filteredData = data.filter(element => {
    return element.includes(inputValue)
 })



  return (
    <div className="app">
      <form className="form-container" onSubmit={(e) => {e.preventDefault()}}>
      <Input autoFocus={true} value={inputValue} 
            onChange={setInputValue}/>
        <Button onClick={onButtonClick}>{filteredData < '0'  ? "Add" : "Search"}</Button>
      </form>
      <BoxContainer>
          {         
          filteredData.map(element => <Box>{element}</Box>)  
          }
      </BoxContainer>
      
    </div>
  );
}

export default App;
