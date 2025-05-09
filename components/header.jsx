'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {MdOutlineConnectWithoutContact  } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Button from './reusable/Button';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
    <header className='navbar'>
        <nav className='navbar__menu'>
          <Link className='navbar__link' href='/'>
            <Image src={'/images/logo/logo_outline_basic.svg'} alt='Logo' width={100} height={50} />
          </Link>
          {/* <Link className='navbar__link' href='/uslugi'>Usługi</Link>
          <Link className='navbar__link' href='/o-nas'>O nas</Link>
          <Link className='navbar__link' href='/realizacje'>Realizacje</Link> */}
        </nav>
        <nav className='navbar__contact'>
          <p>
            <FaPhone />+48 789 173 186
          </p>
          <Link href='/kontakt'>
            <Button icon={<MdOutlineConnectWithoutContact />} modifier='filled'>
              Skontaktuj się z nami
            </Button>
          </Link>
        </nav>     
    </header>
    <header className='navbar--mobile'>
      <nav className='navbar__navigation'>
        <Link href='/'>
            <Image src={'/images/logo/logo_outline_basic.svg'} alt='Logo' width={100} height={50} />
        </Link>
        <button  onClick={()=>toggleMenu()}>
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </nav>        
      {isOpen && 
      <nav className='navbar__menu'>
        <ul className='links'>          
          {/* <Link className='links__item' href='/uslugi' >Usługi</Link>
          <Link className='links__item' href='/o-nas' >O nas</Link>
          <Link className='links__item' href='/realizacje' >Realizacje</Link> */}
         
          <Link href='/kontakt'>
            <Button icon={<MdOutlineConnectWithoutContact />} modifier='filled'>
              Skontaktuj się z nami
            </Button>
          </Link>
          
        
        </ul>
      </nav>}
    </header>
    </>
      
  );
}

export default Header
