"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const page = () => {
const [data, setData] = useState([])

  const getaAPIData = async() =>
  {

          const response = await axios.get('https://randomuser.me/api/?results=10')
          { console.log(response.data.results) }
          setData(response.data.results)
  }
  useEffect(()=>{
    getaAPIData()
  },[])


  return (
    <div>
      
        <h1>All data</h1>
        {
                JSON.stringify(data)
        }



             <br/>
             <br/>
             <br/>
             <br/>


         <h1>using map</h1>    
        {

           

          data.map((value, index)=>(
         
            <div key={index}>
              {/* <h1>Value {JSON.stringify(value)}</h1> */}
            <h1>Name: {value.name.first} {value.name.last}</h1>
            <p>Email: {value.email}</p>
            <img src={value.picture.large} alt="User img" />
          </div>
          ))
         
        }
      
    </div>
  )
}

export default page
