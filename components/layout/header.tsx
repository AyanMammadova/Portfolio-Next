"use client"

import Link from 'next/link'
import { ThemeToggle } from './toggletheme'
import { useTheme } from 'next-themes'
import { TiThMenu } from 'react-icons/ti'
import { useEffect, useState } from 'react'
import MobileMenu from './mobileMenu'
import { usePathname } from 'next/navigation'

const Header = () => {
    const { theme, resolvedTheme } = useTheme()
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(false)
        }
    }, [pathname])

    const currentTheme = mounted ? (resolvedTheme || theme) : 'light'

    return (
        <div className='transition-all h-[150px] duration-300'>
            <div
                className={`fixed top-0 left-0 w-full h-screen z-50 
    bg-red-400
    flex flex-col items-center justify-center gap-8
    transition-all duration-500 ease-in-out
    ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
  `}
            >
                <MobileMenu setMenuOpen={setMenuOpen} />
            </div>

            <div className='flex fixed top-0 left-0 right-0 items-center justify-between p-[5px] md:px-[30px] h-auto'>

                <div className='flex items-center'>
                    <div className='block md:hidden' onClick={() => { setMenuOpen(!menuOpen) }}>
                        <TiThMenu className='text-[3em] ' />
                    </div>
                    <Link href={'/'} className="relative w-28 h-28">
                        {mounted && (
                            currentTheme === 'dark' 
                                ? <img src="/images/logoDark.png" alt="Logo" /> 
                                : <img src="/images/logoLight.png" alt="Logo" />
                        )}
                    </Link>
                </div>
                <div className=' gap-[20px] hidden md:flex  items-center'>
                    <Link href={'/contact'}>
                        Contact
                    </Link>
                    <Link href={'/projects'}>
                        Projects
                    </Link>
                    <Link href={'/blog'}>
                        Blog
                    </Link>
                    <Link href={'/contact'}>
                        Contact
                    </Link>
                </div>
                <div>
                    <ThemeToggle />
                </div>

            </div>
        </div>
    )
}

export default Header