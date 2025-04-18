"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const page = () => {
const [data, setData] = useState([])

  const getaAPIData = async() =>
  {
    try
    {
      const response = await fetch('https://randomuser.me/api/?results=10')
      if (!response.ok) {
        throw new Error('Failed to fetch data!');
      }


      const data = await response.json();
  
     console.log('response', response);
     setData(data.results);
    
      
      // const response = await axios.get('https://randomuser.me/api/?results=10')
     
      // if(response.status !== 200)
      // {
      //   throw new Error('Failed to fetch data!'); 
      // }
      
      //  console.log(response.data.results)
      //  setData(response.data.results)
    }catch(error)
    {
         console.log('Error', error)
         console.log('Error message', error.message)
    }

         
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
