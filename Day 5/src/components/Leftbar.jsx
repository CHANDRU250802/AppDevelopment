import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import home from '../assets/images/home.png';
import dashboards from '../assets/images/dashboards.png';
import users from '../assets/images/users.png';
import settings from '../assets/images/settings.png';
import out from '../assets/images/out.png';


function Leftbar() {

    const dispatch= useDispatch();
    const navigate=useNavigate();


 const homeHandler = () =>{
    navigate('/Home')
 }
const dashboardHandler = ()=>{
    navigate('/Dashboard')
}
const settingsHandler = ()=>{
    navigate('/Settings')
}
const usersHandler = () =>{
    navigate('/Users')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                <button className='left-bar-button nav-btn' onClick={homeHandler}>
                <img src={home} alt='home' className='icons'/>
                    <div  className='t1'>Home</div>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                    <img src={dashboards} alt='dashboards' className='icons'/>
                    <div  className='t1'>Dashboard</div>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                    <img src={users} alt='users' className='icons'/>
                    <div  className='t1'>Users</div>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                    <img src={settings} alt='settings' className='icons'/>
                    <div  className='t1'>Settings</div>
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                    <img src={out} alt='out' className='icons'/>
                    <div  className='t1'>Logout</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Leftbar