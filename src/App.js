import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import ArrayWindow from "./Components/ArrayWindow"

function App() {
  
  
  const [length,setLength] = useState(50)
  
  const [algo,setAlgo] = useState("bubbleSort")
  

  return (

<div className="app">
      <Dropdown>
  <Dropdown.Toggle className="dropdown-basic" variant="success">
    {algo}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onSelect={()=>{setAlgo("bubbleSort")}}>Bubble Sort</Dropdown.Item>
    <Dropdown.Item onSelect={()=>{setAlgo("mergeSort")}}>Merge Sort</Dropdown.Item>
    <Dropdown.Item onSelect={()=>{setAlgo("insertionSort")}}>Insertion sort</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    <Form>

      <Form.Group controlId="formBasicRange">
        <Form.Label>Length</Form.Label>
        <Form.Control type="range" min={10} max={100}
        value = {length}
        onChange = {(event)=>{
          setLength(event.target.value)
          console.log(length)
        }}
        />
      </Form.Group>
    </Form>


       
      <ArrayWindow l = {length} algo={algo}/>
 


    </div>    
  );
}

export default App;
