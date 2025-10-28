import React from 'react'
import { Link } from 'react-router-dom' 

function Pnf() {
    return (
        <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center p-5 my-3 flex-column'>
            <h1>404!</h1>
            <img width={'50%'} src="https://i.pinimg.com/originals/a3/59/56/a35956ec9f42082d3eeee4ba1b506060.gif" alt="page not found" />
            <h4>Page Not Found</h4>
            <Link className='btn btn-primary' to={'/'}>Go to Home</Link>
        </div>
    )
}

export default Pnf