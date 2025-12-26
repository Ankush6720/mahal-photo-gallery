import React from 'react'

const Card = (props) => {
  return (
    <div className="flex flex-col gap-6 bg-gray-800 p-2 rounded-lg hover:shadow-lg transition-transform cursor-pointer">
        <div className="w-44 h-40 overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src={props.elem.download_url} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-4">
            <h2 className="font-bold text-center text-large">{props.elem.author}</h2>
            <a className='bg-gray-600 text-center gap-2 m-2 p-1 rounded-md hover:bg-gray-700' href={props.elem.url} target="_blank">View</a>
        </div>
    </div>
  )
}

export default Card