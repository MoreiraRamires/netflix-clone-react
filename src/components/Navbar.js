import React, { useEffect, useState } from 'react'
import './Navbar.css'


export default function Navbar() {
  let userProfile = {
    name:'Rafael',
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU',
    description:''
  }

  let NetflixInfo = {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    alt: 'Netflix'
  }

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      setShow(window.scrollY > 100)
    })
  
    return () => {
      // window.removeEventListener('scroll')
    }
  }, [])
  


  return (
    
    < div className={`nav-container ${show && 'nav-container-black'}`}>
    <img src={NetflixInfo.logo} alt={NetflixInfo.alt} className="nav-logo" />
    <img src={userProfile.avatar} alt={`Avatar de ${userProfile.name}`} className="nav-avatar" />
   </div>
  )
}
