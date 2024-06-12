import React from 'react'

const page = ({params}:{params:{podcastId:string}}) => {
  
  return (
    <p className='text-white-1'>Podecast Details for {params.podcastId}</p>
  )
}

export default page