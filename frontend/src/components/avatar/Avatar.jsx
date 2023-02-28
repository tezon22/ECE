import React, {useEffect, useState} from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { getImages } from '../../features/image/ProfileImage'
import Spinner from '../Spinner'


const Avatar = () => {
  const {user} = useSelector((state=> state.auth))
  const {pic, loading} = useSelector((state)=> state.image)
  const[ image, setImage ]= useState('')
  const id = user._id
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getImages(id))
    setTimeout(()=>{
      setImage(pic.message)
    }, 3000)
  }, [])
  if(loading){
    return <Spinner/>
  }
console.log(id)
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