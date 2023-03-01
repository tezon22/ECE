import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Avatar = () => {
  const {user} = useSelector((state=> state.auth))
  const {pic} = user
  return (
    <div className="text-center">
    <div className="text-center">
      {  pic === null ? <div className="text-center bg-slate-300 rounded-full mx-auto inline-block p-3 md:p-16">
              <FaUserCircle className='text-[35px] md:text-[55px] mx-auto' />
        </div>:
         <img src={pic} alt='Profile' className='rounded-[50%]' width={70}/>
        }
    </div>
</div>
  )
}

export default Avatar