import React from 'react'
import Layout from '../Components/Layout'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
import '../Assets/CSS/HomePage.css'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const nav=useNavigate(" ");
  const bookdes=()=>{
nav("/bookdes")
  }
  return (
    <>
  <Navbar1/>
  <Sidebar1/>
  <div className='container-homepage'>
  <h2>Books Categories</h2>
  <div className='roomtypes'>
  <div className='rooms'>
  <img src="https://th.bing.com/th/id/OIP.zTAG2vcy64gSvlM208opsAHaKC?w=202&h=274&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="200" height="200" />
  <div className='des'>
  Encyclopedia
  <h6></h6><br/>
  Books Available  : 50<br/><br/>
  Serial No : A001 to A050<br/><br/>
  Type : Information<br/>
  <p onClick={bookdes}>View Details</p>
  </div>
  </div>
  <div className='rooms'>
  <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/6/40/65086eb62e4a1/clean.jpg" width="200" height="200" />
  <div className='des'>
  Comics
  <h6></h6><br/>
  Books Available  : 20<br/><br/>
  Serial Number : A051 to A070<br/><br/>
  Type : Entertainment<br/>
  <p onClick={bookdes}>View Details</p>
  </div>
  </div>
  <div className='rooms'>
  <img src="https://th.bing.com/th/id/OIP.i-1-7spMFxdy4A7AlKsIaQHaJy?w=202&h=267&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="200" height="200" />
  <div className='des'>
  Economy
  <h6></h6><br/>
  Books Available: 80<br/><br/>
  serial Number : A200 to A280<br/><br/>
  Type : literature<br/>
  <p onClick={bookdes}>View Details</p>
  </div>
  </div>
  </div>
  </div>
  <Footer/>
    </>
  )
}

export default HomePage