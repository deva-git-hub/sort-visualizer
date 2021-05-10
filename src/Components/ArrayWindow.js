import {useEffect, useState} from 'react'
import "./ArrayWindow.css"
import Bar from "./Bar.js"




export default function ArrayWindow({l,algo}) {
    
    const [run,setRun] = useState(false)
    const [rawData,setRawData] = useState(Array(l).fill().map(Math.random))
    const [speed,setSpeed] = useState(50)
    const [i,setI] = useState(0)
    const [j,setJ] = useState(0)
    const [currentSize,setCurrentSize] = useState(1)
    const [low,setLow] = useState(0)
    const [high,setHigh] = useState(l-1)
    const [m,setM] = useState(1)
    const [i_ms,setI_ms] = useState(low)
    //const [mid,setMid] = useState(0)


        useEffect(() => {
        if(run){

            switch (algo) {
                case "bubbleSort":
                    if(i < l){
                        bubble();
                    }
                    break;
                case "mergeSort":
                    if(m <= (high - low)){
                       mergeSort() 
                    }
                    
                    break;
            
                default:
                    alert("i dont know about",String(algo));
            }
        }
        
        },[i,j,run,i_ms,m])

        function bubble() {
        setTimeout(()=>{
            
            if(rawData[j] > rawData[j+1]){
                let prev = rawData
                let t = prev[j]
                prev[j] = prev[j+1]
                prev[j+1] = t
                setRawData(prev)
            }
            if(j < (l - i)){
                setJ(j+1)
            }
            else if (i < l-1){
                setJ(0)
                setI(i+1)
            }

        }, Number(100 - speed))
        }

        function mergeSort(){
            if(i_ms < high){
                
                let from = i_ms
                let mid = i_ms + m - 1
                let to = Math.min(i_ms + 2*m -1,high)

                merge(from,mid,to)
                .then((arr)=>{
                    console.log("returned",arr)
                    if(arr){
                     setRawData(arr)
                    }
                    setI_ms(i_ms + 2*m)
                })
                .catch(console.log)

               
  
            }
            else{
                setI_ms(low)
                setM(2*m)             
            }

        }

       const merge = async(from,mid,to)=>{
            let k = from,i=from,j = mid + 1
            let temp = rawData     
            while (i <= mid && j <= to)
            {
                if (rawData[i] < rawData[j]) {
                    temp[k++] = rawData[i++];
                }
                else {
                    temp[k++] = rawData[j++];
                }
            }
     
            // copy remaining elements
            while (i <= mid) {
                temp[k++] = rawData[i++];
            }

            while (j <= to){
                temp[k++] = rawData[j++]
            }

           

            return temp

        }
      

    return (

      
      
      <div className="arraywindow">
          <label>Change speed</label>
          <input type="range" min={1} max={100} value={speed}
          onChange={changeEvent => {
            setSpeed(changeEvent.target.value)
          }}
          defaultValue={50}
          />
          <button onClick={()=>{
              setRun(!run)
            }
              } >Run/Stop</button>
          <button 
          onClick={(event)=>{
              event.preventDefault()
               setI(0)
               setJ(0)
               setM(1)
               setI_ms(low)

               setRawData(Array(Number(l)).fill().map(Math.random))
              }
            } 
              >Populate Array</button>
          <div className="displayarea">
          {
              rawData?.map(num=>{
                  return <Bar height={num} />
              })
          }
          </div>
        
      </div>
    )
}
