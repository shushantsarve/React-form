import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const LoginForm = ({setIsLoggedIn}) => {


    const navigate = useNavigate();

    const [formData, setFormData] = useState({email: "", password: ""});
    const [showPassword, setShowPassword] = useState(false);


    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        
        <label className='w-full'>
            <p className='text-white text-[0.875rem] mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-red'>*</sup>
            </p>
            <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Enter Email Address' required className='bg-[#083344] rounded-[0.5rem] text-white w-full p-[12px]'/>
        </label>
        
        <label className='w-full relative'>
            <p className='text-white text-[0.875rem] mb-1 leading-[1.375rem]'>
                Password<sup>*</sup>
            </p>
            <input type={showPassword ? ("text") : ("password")} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Password' required className='bg-[#083344] rounded-[0.5rem] text-white w-full p-[12px]'/>

            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-[#0284c7] mx-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>

        </label>

        <button className='bg-[#facc15] rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
            Sign In
        </button>
    
    </form>
  )
}

export default LoginForm