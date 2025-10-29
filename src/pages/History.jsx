import { Box,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function History() {
    return (
        <div>
            <h1 className="text-center my-5">Download Resume History</h1>
            <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-75px'}}><IoArrowBackCircleSharp className='me-1' />Back</Link>
             <Box component="section" className='container-fluid'>
                <div className="row">
                    <div className="col-md-4">
                        <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
                            <div className="d-flex justify-conent-between align-items-center">
                                <h6>Review At : Date and Time</h6>
                                <button className='btn text-danger fs-4'><MdDelete /></button>
                            </div>
                            <div className="border rounded p-3">
                                <img width={'200px'} height={'200px'} src="https://i2.wp.com/www.allbusinesstemplates.com/thumbs/2b447747-da1b-428b-b6b9-017d3fe704d7_1.png" alt="resume" />
                            </div>
                        </Paper>
                    </div>
                </div>
    </Box>
        </div>
    )
}

export default History