import React from 'react'
import {  FaShoppingCart, FaUsers, FaUser, FaBox, FaCog, FaHome } from 'react-icons/fa';

const Sidebar = () => {
	return (
		<div className="bg-gray-100 text-gray-900 h-screen px-2 md:px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
			<h1 className='text-2xl font-bold md:block mt-4 text-center'>Shop</h1>
			<ul className='flex flex-col mt-5 text-xl'>
				<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
					<FaHome />
					<span className='inline md:inline'>Home</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
					<FaShoppingCart />
					<span className="inline md:inline">Orders</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
					<FaUsers />
					<span className="inline md:inline">Customers</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
					<FaUser />
					<span className="inline md:inline">Users</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
					<FaBox />
					<span className="inline md:inline">Products</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
					<FaCog />
					<span className="inline md:inline">Settings</span>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar