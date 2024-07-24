import React from 'react'
import Navbar from './Navbar'
import notfound from '../images/notfound.svg'

function NotFound() {
    return (
            <div className='container'>
                <h3 className='title'>Your Web-Page is not founded! (404 Not Found!)</h3>
                <img src={notfound} alt="notfound" />
            </div>
    )
}

export default NotFound