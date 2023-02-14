import React from 'react'
export const Footer = () => {
    const currentYear = new Date().getFullYear() 
  return (
    <footer className='w-100 py-3'>
        <p className='mb-0 text-white text-center text-capitalize'>All rights reserved &copy; {currentYear}</p>
    </footer>
  )
}
