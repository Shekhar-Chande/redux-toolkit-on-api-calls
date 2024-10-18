import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchData } from './redux/slices/storeSlices'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state)=> state)
  return (
    <>
    <button onClick={(e) => dispatch(fetchData())}>Fetch Data</button>
       
           {
             console.log(state)
           }
           {
             state.storedata.data && state.storedata.data.map((item)=>{
               return <div key={item.id}>{item.title}</div>
             })
           }
     
      </>
  )
}

export default App
