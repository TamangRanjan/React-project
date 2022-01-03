import { findByLabelText } from '@testing-library/react'
import React from 'react'
import {NavLink } from 'react-router-dom'
import first from '../src/component/img/app.png'
import Common from './Common'
import './index.css'
import Service from './Service'


const About = () => {


     
    return (
        <>
          <Common name='Welcome to About Page' imgsrc={first}  visit='/contact' bton='Contact Now'/>
          <Service/>
        </>
    )
}

export default About

