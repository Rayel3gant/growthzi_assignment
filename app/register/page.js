import Footer from '@/components/Footer'
import Form from '@/components/Form'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import React from 'react'

const Register = () => {
  return (
    <div>
        <Navbar1/>
        <HeroSection text="Account Register" pageName="Register"/>

        <Form type={1}/>

        <Footer color="#E53E3E"/>

    </div>
  )
}

export default Register