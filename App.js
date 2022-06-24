import './App.css';
import React,{useState} from 'react';

const App=()=> {
  const[city,setcity]=useState("")
  const [result,setresult]=useState("")
  const changeHandler=e=>{
    setcity(e.target.value);
  }
  const submithandler=e=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=>response.json()
    ).then(data=> {
      const kelvin=data.main.temp;
      const celsius=kelvin-273.15;
      setresult("Temperature at"+" "+city+" is \n"+Math.round(celsius))
    })
  }
  return (
    <div>
    <center>
    <div className="card">
      <div className="card-body">
        <h4 className='card-title'> Weather App</h4>
        <form onSubmit={submithandler}>
          <input type="text" name="city" value={city} onChange={changeHandler}></input><br/><br/>
          <input type ="submit" value="get temperature"></input>
        </form>
        <h1>{result}</h1>
      </div>
    </div>
    </center>
    </div>
  );
}

export default App;
