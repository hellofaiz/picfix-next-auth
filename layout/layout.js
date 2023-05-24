import React from 'react'
import styles from '../styles/layout.module.css'
function layout({ children }) {
  return (
    <div className='flex h-screen bg-blue-800'>
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-4/4 grid grid lg:grid-cols-1">

        {/* <div className="right flex flex-col justify-evenly bg-gray-500"> */}
          <div className="text-center py-20 bg-blue-300 ">
            {children}

          {/* </div> */}

        </div>
      </div>
    </div>
  )
}

export default layout