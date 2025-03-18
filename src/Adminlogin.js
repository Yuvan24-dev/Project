import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import './App.css';

function AdminLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:7000/login", {
        email: data.email,
        password: data.password
      });
      localStorage.setItem("admintoken", response.data.Key);
      alert("Login Successful!");
      navigate("/Admin");
    } 
    catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2 className="admin-login-title">Admin Login</h2>
        <div className="admin-login-form">
            <input
              type="email"
              placeholder="Email"
              className="admin-login-input"
              {...register('email', { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}

            <input
              type="password"
              placeholder="Password"
              className="admin-login-input"
              {...register('password', {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })}
            />
            {errors.password && <span className="error">{errors.password.message}</span>}

            <button type="submit" className="admin-login-button">
              Login
            </button>
        </div>
      </div>
    </div>
    </form>
  );
}

export default AdminLogin;