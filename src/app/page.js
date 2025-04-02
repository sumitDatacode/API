"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
const page = () => {


  const getaAPIData = async() =>
  {
          const response = await axios.get('https://randomuser.me/api/')

          console.log(response.data.results)
  }
  useEffect(()=>{
    getaAPIData()
  },[])


  return (
    <div>
       hi
      
    </div>
  )
}

export default page
