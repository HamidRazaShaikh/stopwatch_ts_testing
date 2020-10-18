import React, { useState , useRef} from "react";
import "./index";

const Stopwatch = () => {
  let [timer, setTimer] = useState<number>(0);
  let [ isActive , setIsActive] = useState <Boolean>(true);
  let [ pause , setPause] = useState <Boolean>(true);
  let [ zero ,  setZero] = useState <Boolean>(true);

  const increment  = useRef<any>(null);

  const start = ()=>{
    setIsActive(false);
    setPause(true);
    setZero(true)  

    increment.current = setInterval( ()=> {
      setTimer((timer) => timer +1)
    },1000)


  };

  const stop =()=>{
    setIsActive(true);
    setPause(false);
    setZero(true)  


    clearInterval(increment.current)
  };

  const reset = () =>{
    setIsActive(true);
    setPause(true);
    setZero(false)  

    clearInterval(increment.current);
    setTimer(0)



  }

  const timeFormate = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2);
    const minutes : any = `${Math.floor( timer/60)}`;
    const getMinutes : any= `0${ minutes % 60}`.slice(-2);
    const getHours : any = `0${ Math.floor( timer/3600)}`.slice(-2)

    return  `${getHours}:${getMinutes}:${getSeconds}`


  }


  
  
  return (
    <div className="main-container">
      <div className="container">
        <div className="title"> stop watch hamid raza</div>
        <div className="display">
          {timeFormate()}
         
        </div>
        <div className="btn">
          <button className="btn-start" onClick={start} disabled ={!isActive}>
            Start
          </button>
          <button className="btn-stop" onClick={stop}  disabled ={!pause}>
            Stop
          </button>
          <button  className="btn-reset" onClick = {reset} disabled ={!zero}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
