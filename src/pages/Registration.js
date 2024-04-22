import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'

import '../App.css'

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        agreed: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', formData); 
            console.log(response.data);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };



    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </p>
                <p>
                    <input type="checkbox" name="agreed" id="checkbox" checked={formData.agreed} onChange={handleChange} required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" className='bg-blue-900'>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}