import React from 'react'
import '../assets/css/NotFoundPage.scss'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
   <div className="container">
     <div className='notfound '>
        <h1>Oops.. You are in wrong page!</h1>
        <Link to='/' className='btn btn-dark mt-2 '>back to home</Link>
        <img src="https://cdn.svgator.com/images/2024/04/animated-3D-404-not-found-page-error.gif" alt="" />
    </div>
   </div>
  )
}

export default PageNotFound