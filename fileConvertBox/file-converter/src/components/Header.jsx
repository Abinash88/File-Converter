import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='topheader bg-transparent flex w-full h-[70px]'>
        <div className="innerHeader w-[80%] m-auto flex justify-between items-center">
            <div className="headerleftside">
                <h5 className='sm:text-[18px] headerlogo p-1 text-[16px] font-bold text-gray-100'><Link href={'/'}>FILE CONVERTER</Link></h5>
            </div>
            <nav>
                <ul>
                    <li className='sm:text-[15px] text-[14px] font-semibold hover:text-gray-100 text-slate-200 '><Link href={'/Blog'}>Blog</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header