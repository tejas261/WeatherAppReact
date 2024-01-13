import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import { WeatherContext } from './context/WeatherContext'

function App() {
  const {fetchWeather,airData} = useContext(WeatherContext)
  
useEffect(()=>{
  fetchWeather(),
  airData()
},[])
  return (
    <>
      <Navbar/>
      <Content/>
    </>
  )
}

export default App
