import { findByLabelText } from '@testing-library/react'
import React from 'react'
import {NavLink } from 'react-router-dom'
import first from '../src/component/img/first.webp'
import Common from './Common'
import './index.css'
import Service from './Service'

const Home = () => {


     
    return (
        <>
          <Common  name='Design Your websites with' imgsrc={first}  visit='/service' bton='Get Started'/>
          <Service />
        
        </>
    )
}

export default Home
