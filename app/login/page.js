import Footer from '@/components/Footer'
import Form from '@/components/Form'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection text="Account Login" pageName="Login"/>

        <Form type={2}/>

        <Footer color="#E53E3E"/>
    </div>
  )
}

export default Login