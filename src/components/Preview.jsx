// rfce
import { Divider,Button } from '@mui/material'
import React from 'react'


function Preview() {
    return (
        <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
            <h2>Name</h2>
            <h5>Job Title</h5>
            <h6
            ><span className='mx-2'>Location</span>|<span className='mx-2'>Email</span>|<span className='mx-2'>Mobile</span></h6>
            <p>
                <a href="" target='_blank'>GITHUB</a> |
                <a href="" target='_blank'>LINKEDIN</a> |
                <a href="" target='_blank'>PORTFOLIO</a> 
            </p>
            <Divider sx={{fontSize:'25px'}}>Summary</Divider>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam expedita commodi qui nihil, voluptates obcaecati accusantium cum recusandae architecto, veritatis quia vitae optio sit rerum quae. Illo, omnis explicabo!</p>
            <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
            <h5>Course Name</h5>
            <p
            ><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout Year</span></p>
             <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
            <h5>Job/Internship</h5>
            <p
            ><span className='mx-2'>Company Name</span>|<span className='mx-2'>Company Location</span>|<span className='mx-2'>Duration</span></p>
            <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
            <div className="d-flex flex-wrap justify-content-between my-3">
            <Button variant="contained">NODE JS </Button>
            </div>
        </div>
    )
}

export default Preview