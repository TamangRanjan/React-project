import React from 'react'
import first from '../src/component/img/first.webp'
import './index.css'

const practice = () => {
    return (
        <section id='header' className ='d-flex align-items-center'>

        <div className='container-fluid nav-bg'>
        <div className='row'>
        <div className="col-10 mx-auto">
         <div className="row">
         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
             <h2>Design you Websites with <strong className='brand-name'>One Step Ahead</strong></h2>
             <h3>We provide you the best service</h3>
             <div className="mt-3">
                 <a href='' className='btn get-started'>Get Started</a>
             </div>

         </div>
         <div className="col-lg-6 order-1 order-lg-2 header-img">
             <img src={first} className='img-fluid first' alt='home img'/>
         </div>
         </div>
         </div>
         </div>
         </div>
    </section>
    )
}

export default practice
