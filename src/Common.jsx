import { findByLabelText } from '@testing-library/react'
import React from 'react'
import {NavLink } from 'react-router-dom'
import first from '../src/component/img/first.webp'
import './index.css'

const Common = (props) => {


     
    return (
        <>
           <section id='header' style={{marginTop:'5rem'}}>
            <div className='container-fluid '>
            <div className='row'>
        <div className="col-10 mx-auto">
            <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h2>{props.name}<strong className='brand-name'> <br/> One Step Ahead</strong></h2>
            <h5>We provide you the best service</h5>
     <div className="mt-3">
         <NavLink to={props.visit} className='btn get-started' style={{border : '1px solid blue',
    borderRadius:'1rem'}}>{props.bton}</NavLink>
     </div>

            </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
     <img src={props.imgsrc} className='img-fluid first' alt='Common img'/>
 </div>
 </div>
 </div>
 </div>
 </div>
</section>
        
        </>
    )
}

export default Common

