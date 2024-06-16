"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import "../auth.css";
import Link from "next/link";
import { toast } from "react-toastify";
import logo from "@/assets/logo.png";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  city: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
  });

  const [errors, setError] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError({});

    const validationErrors: Record<string, string> = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.name) {
      validationErrors.name = "Name is required";
    }

    if (!formData.city) {
      validationErrors.city = "City is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    console.log(process.env.NEXT_PUBLIC_BACKEND_API);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.ok) {
          toast(response.message, {
            type: "success",
            position: "top-right",
            autoClose: 2000,
          });
          window.location.href = "/auth/signin";
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            city: "",
          });
        } else {
          toast(response.message, {
            type: "error",
            position: "top-right",
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        toast(error.message, {
          type: "error",
          position: "top-right",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="authout">
      <div className="authin">
        <div className="left">
          <Image src={logo} alt="" className="img" />
        </div>
        <div className="right">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={handleSubmit}
          >
            <div className="forminput_cont">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="forminput_cont">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
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
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="forminput_cont">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Your Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="forminput_cont">
              <label>City</label>
              <input
                type="text"
                placeholder="Enter Your City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <span className="formerror">{errors.city}</span>}
            </div>

            <button type="submit" className="main_button">
              Register
            </button>
            <p className="authlink">
              Already have an account? <Link href="/auth/signin">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
