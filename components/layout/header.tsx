import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './toggletheme'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-[30px]'>
            <div className="relative w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-mono font-black ">
                        M
                    </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-mono font-black bg-gradient-to-br from-blue-500 via-purple-500 to-violet-600 bg-clip-text text-transparent translate-x-6">
                        A
                    </span>
                </div>
            </div>
            <div className='flex gap-[20px] items-center'>
                <Link href={'/contact'}>
                    Contact
                </Link>
                <Link href={'/projects'}>
                    Projects
                </Link>
                <Link href={'/blogs'}>
                    Blogs
                </Link>
                <Link href={'/contact'}>
                    Contact
                </Link>
            </div>
            <div>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Header