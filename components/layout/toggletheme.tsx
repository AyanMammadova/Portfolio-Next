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
        <>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative cursor-pointer p-2 rounded-lg overflow-visible group"
            >
                <div className="relative w-[50px] h-[50px]">
                    {/* Günəş - Daimi fırlanma */}
                    <img 
                        className={`sun-spin absolute inset-0 h-full w-full transition-all duration-1000 ease-out ${
                            theme === 'dark' 
                                ? 'translate-y-[-150%] opacity-0 scale-0' 
                                : 'translate-y-0 opacity-100 scale-100'
                        }`}
                        style={{
                            filter: theme === 'light' ? 'drop-shadow(0 0 20px rgba(255, 200, 0, 0.6))' : 'none'
                        }}
                        src="/images/theme/sun.png" 
                        alt="Sun" 
                    />
                    
                    {/* Ay - Daimi üzgücülük */}
                    <img 
                        className={`moon-float absolute inset-0 h-full w-full transition-all duration-1000 ease-out ${
                            theme === 'dark' 
                                ? 'opacity-100 scale-100' 
                                : 'translate-y-[150%] opacity-0 scale-0'
                        }`}
                        style={{
                            filter: theme === 'dark' ? 'drop-shadow(0 0 15px rgba(200, 200, 255, 0.5))' : 'none'
                        }}
                        src="/images/theme/moon.png" 
                        alt="Moon" 
                    />
                </div>
            </button>
        </>
    )
}