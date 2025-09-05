import React, { useContext } from 'react'
import { FaSearch, FaMoon, FaSun, FaTachometerAlt } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContextProvider'

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className='bg-gray-100 text-gray-900 border-b border-gray-300 px-4 py-2 flex items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
            {/* Left: Dashboard name */}
            <div className='flex items-center min-w-[120px]'>
                <FaTachometerAlt className='text-2xl mr-2 text-blue-600' />
                <h1 className='text-xl font-bold'>Dashboard</h1>
            </div>
            {/* Center: Search bar with icon */}
            <div className='flex-1 flex justify-center'>
                <div className='relative w-full max-w-md'>
                    <FaSearch className='absolute top-2.5 left-3 text-gray-500 dark:text-white' />
                    <input
                        type='text'
                        placeholder='Search...'
                        className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white'
                    />
                </div>
            </div>
            {/* Right: Toggle */}
            <div className='flex items-center min-w-[60px] justify-end'>
                <button className='text-2xl text-dark dark:text-white ml-2' onClick={toggleTheme}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </div>
    )
}

export default Navbar