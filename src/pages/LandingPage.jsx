// rfce
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div>{/* landing part */}
        <section style={{width:'100%',height:'100vh',backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className="container-fluid row align-items-center">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
                <h3>Designed to get hired.
                    Your skills,your story,your next job - all in one.
                </h3>
                <Link to={'/resume'} className='btn text-center' style={{backgroundColor:'purple'}}>Make your Resume</Link>
            </div>
            <div className="col-md-4"></div>
        </div>
        </section>
        {/* tools */}
        <section className='m-5'>
            <h1 className="text-center">Tools</h1>
            <div className="container row align-items-center">
                <div className="col-md-6">
                    <div className='my-3'>
                        <h4>Resume</h4>
                    <p>Create unlimited new resumes and easily edit them afterwards.</p>
                    </div>
                    <div className='my-3'>
                        <h4>Cover Letters</h4>
                    <p>Easily write professional cover letters.</p>
                    </div>
                    <div className='my-3'>
                        <h4>Jobs</h4>
                    <p>Automatically receive new and relevent job postings.</p>
                    </div>
                    <div className='my-3'>
                        <h4>applications</h4>
                    <p>Effortlessly manage and track your job applications in an organized manner.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume" />
                </div>
            </div>
        </section>
        {/* image */}
        <section style={{height:'450px',width:'100%',backgroundImage:'url("https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg")',backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>
        </section>
        {/* testimony */}
        <section className='m-5'>
            <h1 className="text-center my-5">Testimonial</h1>
            <div className="row container">
                <div className="col-md-6 col-12">
                    <h3 className='my-5'>Trusted by professionals worldwide.
                </h3>
                <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
                </p>
                <p className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
                </p>
                <p className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
                </div>
                <div className="col-md-6 col-12">
                    <div className="row">
                        <div className="col-3">
                            <img className='w-100' src="https://sp.yimg.com/ib/th/id/OIP.dEi0CuHfiqjbbTYxrVA-DQHaJQ?pid=Api&w=148&h=148&c=7&rs=1" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://sp.yimg.com/ib/th/id/OIP.mmsnY9xJnIUbvU9n-Yz6SwHaHa?pid=Api&w=148&h=148&c=7&rs=1" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://sp.yimg.com/ib/th/id/OIP.jKXW4xBicXhHayW5JfQ7BQAAAA?pid=Api&w=148&h=148&c=7&rs=1" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://sp.yimg.com/ib/th/id/OIP.Ji5Jf1cpOKs9AEQc2sfd-AAAAA?pid=Api&w=148&h=148&c=7&rs=1" alt="person" />
                        </div>
                        <div className='row my-3'>
                        <div className="col-3">
                            <img className='w-100' src="https://up.yimg.com/ib/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&rs=1&c=1&qlt=95&w=93&h=93" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://up.yimg.com/ib/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?pid=Api&rs=1&c=1&qlt=95&w=105&h=105" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://up.yimg.com/ib/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?pid=Api&rs=1&c=1&qlt=95&w=94&h=93" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.0COjt_Da9evCpkffUQO8aAHaE7?pid=Api&P=0&h=180" alt="person" />
                        </div>
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://tse4.mm.bing.net/th/id/OIP.PkR3RsANuYxmp3Bv2cageQHaE8?pid=Api&P=0&h=180" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.kvHaEpiqESKKJqKOFXfeHAHaE8?pid=Api&P=0&h=180" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.tr-e86aL6F6coTiAA4ioKwHaE8?pid=Api&P=0&h=180" alt="person" />
                        </div>
                        <div className="col-3">
                            <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.Smm_c_fBjkZej0-b_o03UQHaE8?pid=Api&P=0&h=180" alt="person" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default LandingPage