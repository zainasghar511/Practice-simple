import React,{useEffect, useState,useRef} from 'react'

const App = () => {
  const [time, setTime] = useState((()=>{
    return new 
     Date().toLocaleTimeString
     ([],{hour:"2-digit", minute:"2-digit", second:"2-digit",Date:"2-digit"})
  }))
useEffect(()=>{
const timeid = setInterval(() => {
  setTime(new
     Date().toLocaleTimeString
     ([],{hour:"2-digit", minute:"2-digit", second:"2-digit",Date:"2-digit"}))
},1000);
return()=>clearInterval(timeid)
},[])

  const [first, setFirst] = useState(()=>{
    const curent = localStorage.getItem("D")
    return curent? JSON.parse(curent):0
  })
  useEffect(()=>{
localStorage.setItem("D",JSON.stringify(first))
  },[first])
  const Refco = useRef(0)
  return (
    <div>
      <h1>{first}</h1>
      <button
      onClick={(()=>{
        setFirst(first+1)
      })}
      >+</button>
      <button
      onClick={(()=>{
        setFirst(first-1)
      })}
      >-</button>
      <h1>Use of UseRef</h1>
      <h1>{Refco.current}</h1>
<button onClick={(()=>{
  Refco.current = Refco.current+1
})} >+</button>
<h1>Live:{time}</h1>
<h1>Date: {new Date().toLocaleDateString()}</h1>
<h1>Day: {new Date().toLocaleDateString([], { weekday: 'long' })}</h1>
    </div>
  )
}

export default App