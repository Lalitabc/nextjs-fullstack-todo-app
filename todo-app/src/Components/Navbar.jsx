import React from 'react'

const Navbar = () => {
    return (
        <div className='text-white flex py-3 flex-wrap justify-around bg-slate-500'>
            <h1 className='text-lg font-semibold'>Todo App</h1>
            <ul className='flex gap-[40px] text-m'>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5     dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  ">
                    Login
                </button>
            </ul>
        </div>
    )
}

export default Navbar