import React, { useState } from 'react'
import Navbar1 from './Navbar1'
import Sidebar1 from './Sidebar1'
import Footer from './Footer'
import '../Assets/CSS/RoomDes.css'
import { useNavigate } from 'react-router-dom'

function BookDes() {
  const nav=useNavigate("");
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [difference, setDifference] = useState('');

  const calculateDifference = () => {
      const d1 = new Date(date1);
      const d2 = new Date(date2);
      const diff = Math.abs(d1 - d2);
      const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDifference(diffDays);
  };
  const checkout=()=>{
    nav("/bill")
  }

  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='containerrd'>
    <div className='desimgs'>
    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/b/e0/64c7d3af1fb02/clean.jpg" height="300" width="400" />

    </div>
    <div className='descontent'>
    <p>Interesting Books !!!</p>
    <div className='linebill'>
    </div>


  <label>Book Got Date </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
  <br/><br/>
    <label>Book Return Date</label>&nbsp;&nbsp;<input type="date" value={date2} onChange={e => setDate2(e.target.value)} />
    <button onClick={calculateDifference}>Calculate</button>
    <br/><br/>
    <h3>Total No Of Days: {difference}</h3>
    <button className='booknow' onClick={checkout}>Book Now</button>
    </div>
    </div>


    <div className='containercc'>
    <h2>Uncanny Avengers (2023)</h2><br/>
    <h3>Published:<br/>
    October 25, 2023</h3><br/>
    <h3>Writer:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Gerry Duggan</h3><br/>
    <div className='hotelpolicy'>
    <h3>Cover Artist:<br/>
    Javier Garron
    </h3>
    <div className='timetable'>
    </div>
    </div>
<p>The Unity Squad faces off against the Mutant Liberation Front. <br/>Blood will be spilled, and one will fall - TO THEIR DEATH! Plus,<br/> Captain America's been hit with grenades, bullets and bombs, <br/>but somebody lobs something at Captain America that we've never seen before. <br/>'Nuff said!</p>
    </div>
    <br/><br/><br/><br/>
    <Footer/>
    </>
  )
}

export default BookDes