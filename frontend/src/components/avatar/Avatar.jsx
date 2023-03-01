import React, {useEffect, useState} from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const Avatar = () => {
  const API_URL = 'http://localhost:5000/api/uploadpics/'
  const {user} = useSelector((state=> state.auth))
  const[ image, setImage ]= useState('')
  
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
    <div className="text-center">
    <div className="text-center">
       <div className="text-center bg-slate-300 rounded-full mx-auto inline-block p-3 md:p-16">
              {image === '' ?<FaUserCircle className='text-[35px] md:text-[55px]' />:
              <img src={image} alt='Profile' className='rounded-[50%]' width={70}/> 
              }
        </div>
          
    </div>
</div>
  )
}

export default Avatar