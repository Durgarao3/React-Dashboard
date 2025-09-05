import React from 'react'

const cardColors = {
  Orders: 'from-blue-400 to-blue-600',
  Products: 'from-purple-400 to-purple-600',
  Users: 'from-green-400 to-green-600',
  Settings: 'from-yellow-400 to-yellow-600',
};

const Card = ({icon, title, value}) => {
  return (
    <div className={`relative overflow-hidden p-4 rounded-lg shadow-md flex items-center space-x-6 bg-white dark:bg-gray-800 dark:text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
      style={{
        background: `linear-gradient(90deg, var(--tw-gradient-stops))`,
        '--tw-gradient-from': `var(--tw-color-${title.toLowerCase()}-from, #fff)`,
        '--tw-gradient-to': `var(--tw-color-${title.toLowerCase()}-to, #fff)`
      }}>
      <div className={`text-3xl text-white p-3 rounded-full shadow-lg bg-gradient-to-br ${cardColors[title] || 'from-gray-400 to-gray-600'}`}>{icon}</div>
      <div>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-xl'>{value}</p>
      </div>
    </div>
  )
}

export default Card