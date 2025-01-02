import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();

    // Check if passwords match before navigating
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Navigate to the home page after successful registration
    navigate("/Find-Your-Perfect-Dog-Breed/"); // Or redirect to another page like login
  };

  return (
    <form onSubmit={update}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="gmail">Gmail</label>
        <input
          type="email"
          id="gmail"
          name="gmail"
          placeholder="Gmail"
          required
          onChange={(e) => setGmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/sign">Sign In</Link></p> {/* Use Link here */}
      </div>
    </form>
  );
};

export default Register;
