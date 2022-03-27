import React from 'react'
import { Link } from 'react-router-dom'

const Data = () => {
   
  return (
    <div> 
      <div className='nav'>
        <ul>
          <li> <Link className='nav1' to="/">Home</Link> </li>
          <li><Link className='nav1' to="/about">About</Link> </li>
          <li> <Link className='nav1' to="/contact">Contact</Link> </li>
        </ul>
      </div>
     
      
     
      

      
     
    </div>
  )
}

export default Data
