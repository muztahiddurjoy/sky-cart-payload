import payload from 'payload'
import React, { useEffect } from 'react'

const CategoryAdapter = ({path}:{path:string}) => {
    // useEffect(() => {
    //   payload.find({
    //     collection:'categories'
    //   }).then((cats)=>{
    //     console.log(cats.docs)
    //   })
    // }, [])
    
  return (
    <>
    <p>{path}</p>
    </>
  )
}

export default CategoryAdapter