import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <ul>
        <Link href='/'>Strona główna</Link>
        <Link href='/uslugi'>Usługi</Link>
        <Link href='/o-nas'>O nas</Link>
        <Link href='/realizacje'>Realizacje</Link>
        <Link href='/kontakt'>Kontakt</Link>
      </ul>
    </div>
  )
}

export default Header
