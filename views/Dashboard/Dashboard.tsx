import React from 'react'
import {Eyebrow, Gutter} from "payload/components/elements"
const Dashboard = () => {
  return (
    <>
    <Eyebrow/>
    <Gutter>
    <div className='grid grid-cols-2'>
        <p className='text-red-500'>he</p>
        <p>Random</p>
    </div>
    </Gutter>
    </>
  )
}

export default Dashboard