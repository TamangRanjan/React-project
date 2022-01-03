import React from 'react'
import Card from './Card'
import Sdata from './Sdate'

const Service = () => {
    return (
        <>
           <div className="my-5">
               <h1 className='text-center'> Our Service</h1>
               </div> 
               <div className='container-fluid mb-5'>
            <div className='row'>
        <div className="col-10 mx-auto">
            <div className="row gy-4 d-flex">
            {
               Sdata.map((val, ind) =>{
                   return <Card keu ={ind} img={val.imgsrc} title={val.title} />
               })
            }
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Service
