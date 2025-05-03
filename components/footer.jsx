import Image from 'next/image'
import React from 'react'
import { PiMapPinAreaFill } from "react-icons/pi";
import { GoLaw } from "react-icons/go";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__logo--desktop">
        <Image src="/images/logo/logo_basic.svg" alt="Logo" width={150} height={150} />
      </div>
      <div className="footer__logo--mobile">
        <Image src="/images/logo/logo_outline_dark.svg" alt="Logo" width={150} height={100} />
      </div>
      <section className="footer__section">
        <p className="company-name">PRO IT Support Reginald Łuckoś</p>
        <p className="company-localization">
          <PiMapPinAreaFill className="icon" /> 
          <span className='data'>Sterowcowa 13 lok. 2 <br/> 54-130 Wrocław </span>
        </p>
        <p className="company-financial">
          <GoLaw className="icon" /> 
          <span className='data'>NIP: 894-231-97-57 <br/> REGON: 020239197</span>
        </p>
      </section>
      <section className="footer__section">
        <p className="company-phone">
          <FaPhone className="icon" /> 
          <span className='data'>+48 789 173 186</span>
        </p>
        <p className="company-mail">
          <FaEnvelope className="icon" /> 
          <span className='data'>kontakt@nexa-verse.pl</span>
        </p>
      </section>
      
    </footer>
  )
}

export default Footer
