import React from 'react'
import '../Assets/CSS/AboutsUs.css'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import logo from '../Assets/Images/AClogo.png'
import Footer from '../Components/Footer'
import abtbg from'../Assets/Images/abtusbg.jpg'
import abtbg1 from '../Assets/Images/abtusbg1.jpg'
function AboutUs() {
  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='containerbg'>
      <div className='containerabt'>
        <div className='abtus'>About Us</div>
    <br/>
        <div className='abt'>
          <p> <h4>Welcome to our Library Management System! We are passionate about enhancing the way libraries operate and serve their communities. With a strong commitment to innovation and efficiency, our team has developed a robust digital platform that empowers librarians to streamline cataloging, circulation, and patron management. Our user-friendly interface ensures seamless navigation for both staff and library users. We take pride in fostering a culture of continuous improvement and customer satisfaction, working closely with libraries of all sizes to tailor solutions to their unique needs. Join us on our mission to make libraries more accessible and engaging for everyone.</h4></p>
          
        </div><br/><br/><br/>
     
      <div className='abtus1'>An international presence<br/></div>
     <div className='abt1'>
      <h4>Our Library Management System has a truly global reach, serving libraries in diverse corners of the world..<br/>
      we understand the unique challenges and requirements that libraries face on an international scale. <br/>
      We're proud to collaborate with libraries worldwide <br/>
      Library Management System is your trusted partner in advancing literacy and education on a global stage. </h4>
       <div className='imgs1'>
       <img src={abtbg1} width={300} height={200} /></div>
     </div>
     </div>
     <br/><br/>
     <div className='teamname'>Our Team</div>
     <div className='team'>
     <div>
     <img src={logo} width={80} />
     <br/>
     KavinKumar K <br/>IT<br/>3 Yr
     </div>
     <div>
     <img src={logo} width={80} />
     <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aarthi DJ<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 Yr
     </div>
     <div>
     <img src={logo} width={80} />
     <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chandrasekaran R<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 Yr
     </div>
     </div>
     </div>
     <Footer/>
    </>
  )
}

export default AboutUs