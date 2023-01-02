import React from 'react'
import { Link } from 'react-router-dom'

const L1 = () => {
  return (
      <div className="container-fluid">
          <div className="flex my-8 mx-4">
              <Link className="w-1/12 text-5xl font-bold" to="/ebook"><i class="uil uil-previous"></i></Link>
              <div className="w-11/12 text-center text-2xl font-bold mt-2">
                  100 Level
              </div>       
          </div>
      </div>
  )
}

export default L1