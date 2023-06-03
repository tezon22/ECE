import React, {useEffect, useState} from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Avatar = () => {
  const {user} = useSelector((state=> state.auth))
  const[ image, setImage ]= useState('')
  const API_URL = 'api/uploadpics/'

  useEffect(()=>{
   
   if(user){
    const id = user._id
     const getImage = async (id) => {
       const response = await axios.get(API_URL + id)
       
       setImage(response.data.message)
      }
      getImage(id)
   }else{
    setImage('')
   }
  }, [])



  return (
    <Link to='/profile' className="text-center">
    <div className="text-center">
       <div className="text-center rounded-full mx-4 inline-block">
              {image === '' ?<FaUserCircle className='text-[35px] md:text-[55px]' />:
              <img src={image} alt='Profile' className='rounded-[50%] max-h-20 lg:max-h-24 w-20 lg:w-24'/> 
              }
        </div>
          
    </div>
</Link>
  )
}

export default Avatar