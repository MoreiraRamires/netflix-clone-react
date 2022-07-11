import React from 'react'
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

  return (
   <div className="nav-container">
    <img src={NetflixInfo.logo} alt={NetflixInfo.alt} className="nav-logo" />
    <img src={userProfile.avatar} alt={`Avatar de ${userProfile.name}`} className="nav-avatar" />
   </div>
  )
}
