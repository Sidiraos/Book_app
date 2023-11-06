import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto ">
    <div className="container">
      <p>&copy; 2023 Sidiraos</p>
      <div className="mt-2">
        <a href="https://github.com/sidiraos" className="text-light me-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/sidiraos" className="text-light" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer