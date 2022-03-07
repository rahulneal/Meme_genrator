import React from 'react'
import "./App.css"

function Header() {
  return (
    <div className='header'>
        <div>
            Meme Genrator
        </div>
        <div>
          <a href="/images/myw3schoolsimage.jpg" download="w3logo">
Downloads</a>
        </div>
    </div>
  )
}

export default Header