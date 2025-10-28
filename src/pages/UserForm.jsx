import React from 'react'
import UseInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UseForm() {
    return (
        <div className='container'>
            <div className="row p-5">
                <div className="col-lg-6">
                    <UseInputs/>
                </div>
                <div className="col-lg-6">
                    <Preview/>
                </div>
            </div>
        </div>
    )
}

export default UseForm