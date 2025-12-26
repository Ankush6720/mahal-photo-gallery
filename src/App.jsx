import React, { useEffect, useState } from "react"
import Card from "./components/Card"
import axios from "axios"

const App = () =>{

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const gerData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserData(response.data)
    }

    useEffect(() => {
      gerData()
    }, [index]);

    let printUserData = <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading......</h3>

    if (userData.length > 0) {
      printUserData = userData.map(function(elem, idx) {
        return <div key={idx}>
          <Card elem={elem} />
        </div>
      })
    } 

  return (
    <>
    <div className="bg-black text-white justify-center w-full h-12 shadow-md fixed ">
      <h2 className="text-center pt-2 font-bold">Mahal Photo Gallery</h2>
    </div>
    <div className="text-white bg-gray-700 overflow-auto h-screen p-2 pt-16">
      <div className="flex h-[82%] flex-wrap gap-4 p-2">
        {printUserData}
      </div>
      <div className="flex justify-center gap-6 mt-21 item-center p-4">
        <button 
        style={{ opacity: index == 1 ? 0.6 : 1 }}
        className="bg-orange-600 p-2 rounded-md hover:bg-orange-700" onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }} 
        >Previous</button>
        <span className="text-lg font-semibold">Page: {index}</span>
        <button className="bg-orange-600 p-2 rounded-md hover:bg-orange-700" onClick={() => {
          setUserData([])

          setIndex(index + 1)
        }}>Next</button>
      </div>
    </div> 
    </>
    
  )
}

export default App
