'use client'


const Signin = () => {
  return (
      <div className='bg-white max-w-4xl w-full font-zen-kaku'>
      <h1 className='text-4xl text-slate-600 text-center'>Sign In</h1>
      <p className='text-slate-700 text-center'>Quick & Simple way to Automate your payment</p>

    <div className='pt-11'>
        <div className='mb-2'>
          <input type="text" placeholder='Email' className='input-field'/>
        </div>  
        <div className='mb-2'>
          <input type="password" placeholder='Passowrd' className='input-field'/>
        </div>
      

        <button type='submit' className='submit-btn'>Sign up</button>
    </div>
     
    </div>
  )
}

export default Signin