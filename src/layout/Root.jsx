import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='font-inter'>
      <Outlet/>
    </div>
  )
}

export default Root
