'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0)
        return () => clearTimeout(timer)
    }, [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg"
        >
            {theme === 'dark' ? (
                <img className='h-[50px]' src="/images/theme/moon.png" alt="Moon" />
            ) : (
                <img className='h-[50px]' src="/images/theme/sun.png" alt="Sun" />
            )}
        </button>
    )
}