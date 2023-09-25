import React from 'react'
import '../Assets/CSS/TermsConditions.css'
import Layout from '../Components/Layout'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
function TermsConditions() {
  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='containertc'>
    <div className='tch'>
    <center>Terms and Conditions</center></div>
    <div className='tcc'><li>
    . These Terms and Conditions govern your access to and use of our services. By using our Library Management System, you agree to comply with and be bound by the following terms:<br/></li><br/>
    <li>To access our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials.<br/></li>
    <br/>
    <li> 
    You agree to use our Library Management System for lawful purposes only and in compliance with all applicable laws and regulations.</li><br/>
    <li> You may not copy, modify, distribute, or reproduce any content from our system without our prior written consent.<br/></li><br/>
    <li> We may collect and store data related to your library and usage of our services. This data will be used for service provision, system improvement, and as described in our Privacy Policy.</li><br/>
    <li>We reserve the right to terminate or suspend your access to our Library Management System at our discretion, without prior notice, if you violate these Terms and Conditions.
    </li><br/>
    <li>To the extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Library Management System.    </li>
    </div>  
    </div>
    <Footer/>
   
    
    </>
  )
}

export default TermsConditions