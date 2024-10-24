import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'

const LayouOne = () => {

    const mainUserReduxData = useSelector((state)=>state.info.userdata)

    const navigate = useNavigate()

  


 


  useEffect(()=>{
    if(mainUserReduxData == null){
        navigate('/login')
    }
   
  },[mainUserReduxData])




  return (
    <>
  
    <Outlet/>
      
    </>
  )
}

export default LayouOne
