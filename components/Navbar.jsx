import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3 text-white '>
            <Link href={'/'}>CRUD</Link>
            <Link href={'/addTopic'} className='underline '>Add Topic</Link>

        </nav>
    )
}

export default Navbar
