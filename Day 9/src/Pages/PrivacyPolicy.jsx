import React from 'react'
import '../Assets/CSS/PrivacyPolicy.css'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
function PrivacyPolicy() {
  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='containerpp'>
    <div className='pph'><center>Privacy Policy</center></div>
    <div className='ppc'>
    When you engage with our Library Management System, we collect and utilize personal information and library data responsibly and transparently..<br/><br/>
      <b>General Principles<br/><br/></b>
      We gather personal information, such as your name, contact details, and payment information, solely for the purpose of providing you access to our system, managing your account, and offering assistance when needed. Additionally, we may collect and store data related to your library, including catalog information, circulation records, and patron details, all aimed at optimizing our system's functionality.<br/>

      Rest assured, your information is kept secure through industry-standard measures to prevent unauthorized access, disclosure, or alteration. Our commitment to data protection extends to its retention, wherein we retain your personal information and library data only as long as necessary to fulfill the purposes mentioned in this Privacy Policy.<br/>
      
      We do not share your personal information with third parties unless mandated by law or essential for the provision of our services. However, we may use aggregated, non-identifiable data for research and service enhancement.<br/>
      
      You have the right to access, correct, or delete your personal information, and our team is readily available to address your inquiries or concerns. Please reach out to us at [Contact Information].<br/>
      
      Please be aware that we may periodically update this Privacy Policy, with any revisions posted on our website. By using our Library Management System, you consent to the terms laid out here. We are dedicated to safeguarding your privacy and ensuring the confidentiality and security of your data throughout your interaction with our system.<br/>
    <br/>


    </div>
    </div>
    <Footer/>
    </>
  )
}

export default PrivacyPolicy