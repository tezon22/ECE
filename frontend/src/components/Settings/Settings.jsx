import React from 'react'
import {MdOutlineBackspace} from 'react-icons/md'
import DarkModeButton from '../DarkModeButton'
const Settings = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex p-5 gap-10'>
    <MdOutlineBackspace/>
    <div className='text-red'>
        Settings
    </div>
        </div>
    <DarkModeButton className="flex"/>
    </div>
  )
}

export default Settings;