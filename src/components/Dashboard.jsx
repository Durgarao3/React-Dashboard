import React from 'react'
import Card from './Card'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { dataLine, dataBar } from '../assets/ChartData'
import {Line, Bar} from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

const Dashboard = () => {
  return (
    <div className='grow p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            <Card icon={<FaShoppingCart />} title="Orders" value="140"/>
            <Card icon={<FaBox />} title="Products" value="120"/>
            <Card icon={<FaUsers />} title="Users" value="30"/>
            <Card icon={<FaCog />} title="Settings" value="11"/>
        </div>
        <div className='grid sm-grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='bg-white/80 p-4 dark:bg-gray-800/80 rounded-lg shadow-lg animate-fade-in delay-100 border border-blue-100 dark:border-gray-700 backdrop-blur'>
                <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                <Line data={dataLine} />
            </div>
            <div className='bg-white/80 p-4 dark:bg-gray-800/80 rounded-lg shadow-lg animate-fade-in delay-200 border border-purple-100 dark:border-gray-700 backdrop-blur'>
                <h3 className='text-lg font-semibold mb-4'>Products Data</h3>
                <Bar data={dataBar} />
            </div>
        </div>
    </div>
  )
}

export default Dashboard