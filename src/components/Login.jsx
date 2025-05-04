import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/login/', credentials);
      localStorage.setItem('access_token', response.data.access_token);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed.');
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Manufacturer Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
