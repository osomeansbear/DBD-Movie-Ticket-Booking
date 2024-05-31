"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/Navbar/NavBar';
import '../auth.css';
import Link from 'next/link';
import { toast } from 'react-toastify';
import logo from '@/assets/logo.png'

interface FormData {
  email: string;
  password: string;
}

const Signin = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [errors, setError] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
  }

  return (
    <div className='authout'>
        <div className='authin'>
            <div className="left">
                <Image src={logo} alt="" className='img' />
            </div>
            <div className='right'>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onSubmit={handleSubmit}
                >
                    <div className="forminput_cont">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="formerror">{errors.email}</span>}
                    </div>
                    <div className="forminput_cont">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <span className="formerror">{errors.password}</span>
                        )}
                    </div>

                    <button type="submit" className="main_button">
                        Login
                    </button>

                    <p className="authlink">
                        Don't have an account? <Link href="/auth/signup">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signin