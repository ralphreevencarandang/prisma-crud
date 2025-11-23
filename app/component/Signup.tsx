'use client'

import { useState } from 'react'
import Link from 'next/link'
const Signup = () => {

  const [data, setData] = useState({
    email: '',
    username: '',
    password: ''
  })

  const [confirmPassword, setConfirmPassword] = useState('')


  return (
    <div className='bg-white max-w-4xl w-full font-zen-kaku'>
      <h1 className='text-4xl text-slate-600 text-center'>Sign Up</h1>
      <p className='text-slate-700 text-center'>Quick & Simple way to Automate your payment</p>

    <div className='pt-11'>
        <div className='mb-2'>
          <input type="text" placeholder='Email' className='input-field' onChange={(e)=> setData({...data, email: e.target.value})}/>
        </div>  

        <div className='mb-2'>
          <input type="email" placeholder='Username' className='input-field' onChange={(e)=> setData({...data, username: e.target.value})}/>
        </div>
        <div className='mb-2'>
          <input type="password" placeholder='Passowrd' className='input-field' onChange={(e)=> setData({...data, password: e.target.value})}/>
        </div>
        <div className='mb-2'>
          <input type="password" placeholder='Confirm Password' className='input-field' onChange={(e)=> setConfirmPassword(e.target.value)}/>
        </div>

        <button type='submit' className='submit-btn mb-2'>Sign up</button>
        <Link href={''} className='text-right text-blue-400'>Already have an account?</Link>
    </div>
     
    </div>
  )
}

export default Signup