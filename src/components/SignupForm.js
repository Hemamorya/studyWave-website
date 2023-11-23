import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import {  AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function SignupForm({setIsLoggedIn}) {
    const navigate=useNavigate();
    const [FormData,setFormData]=useState({firstname:'', lastname:'', email:'' ,
    confirmpassword:'', createpassword:''});
    const [showPassword,setshowPassword]=useState(false);
    function changeHandler(event){
        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ) )
    }
    function submithandler(event) {
        event.preventDefault();
      
        if (FormData.createpassword !== FormData.confirmpassword) {
          toast.error('Passwords do not match');
          return;
        }
      
        setIsLoggedIn(true);
      
        // Navigate and display success message after setting user as logged in
        navigate('/dashboard');
        toast.success('Account Created');
      
        const accountData = { ...FormData };
        console.log('Printing form data:');
        console.log(accountData);
      }
      
  return (
    <div>
    <div>
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>
    </div>

    <form onSubmit={submithandler}>

    {/* first name and last name */}
    <div>

    <label>
            <p>First Name</p>
            <input
            required
            type='text'
            name='firstname'
            onChange={changeHandler}
            placeholder='Enter firstname'
            value={FormData.firstname}
             ></input>
        </label>
        <label>
            <p>Last Name</p>
            <input
            required
            type='text'
            name='lastname'
            onChange={changeHandler}
            placeholder='Enter lastname'
            value={FormData.lastname}
             ></input>
        </label>
    </div>
        {/* email */}
        <label>
            <p>
                Email address<sup>*</sup>
            </p>
            <input
            required
            type='email'
            value={FormData.email}
            placeholder='Enter email'
            name='email'
            onChange={changeHandler}
            ></input>
        </label>
        {/* create password and consfirm passworf */}
        <label>
            <p>
                Create Password<sup>*</sup>
            </p>
            <div>
            <input
            required
            type={showPassword ?('text'):('password')}
            value={FormData.createpassword}
            placeholder='Enter password'
            name='createpassword'
            onChange={changeHandler}
            className='text-black'
            ></input>
            <span onClick={()=> setshowPassword((prev)=> !prev)}
            
            >{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
            </div>
        

        </label>
        <label>
            <p>
                Confirm Password<sup>*</sup>
            </p>
            <input
  required
  type={showPassword ? 'text' : 'password'}
  value={FormData.confirmpassword}
  placeholder='Confirm Password'
  name='confirmpassword'
  onChange={changeHandler}
  className='text-black' // Add the "text-black" class
/>

            <span onClick={()=> setshowPassword((prev)=> !prev)} className='flex'
            
            >{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>

        

        </label>
        <button> Create account</button>

    </form>
    
    </div>
  )
}

export default SignupForm