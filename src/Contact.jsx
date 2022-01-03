import React from 'react'
import { useState } from 'react'

const Contact = () => {

    const [firstdata, result] = useState({
        fullname :'',
        phone :'',
        email :'',
        msg :'',
    })

    const Eventhandle=(event)=>{
        const {name, value} = event.target;

        result((prevValue) =>{
            return {
                ...prevValue,
                [name] : value
            }
        })
    }
    const submission =(e)=>{
        e.preventDefault();
    alert('Form has been Submitted');
    }
     
    return (
        <>
       <div className="my-5">
           <h1 className="text-center">
               Contact Us
           </h1>
       </div>
      <div className="container container_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={submission}>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" 
  name ='fullname'
  value={firstdata.fullname}
  onChange={Eventhandle}
  placeholder="Enter your name" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1"
   name ='phone'
   value={firstdata.phone}
   onChange={Eventhandle}
    placeholder="mobile number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
   name ='email'
   value={firstdata.email}
   onChange={Eventhandle}
    placeholder="name@example.com" />
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" 
   name ='msg'
   value={firstdata.msg}
   onChange={Eventhandle}
    id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                </form>
              </div>
          </div>
      </div>                  
            
        </>
    )
}

export default Contact
