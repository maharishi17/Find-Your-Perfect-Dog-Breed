import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignIn = () => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate here

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to home page after sign-in
  };

  return (
    <form className="vangal" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="gmail">Gmail</label>
        <input
          type="email"
          id="gmail"
          name="gmail"
          placeholder="Enter your Gmail"
          required
          onChange={(e) => setGmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
        <p className="rep">Don't Have An Account? <a href="/Find-Your-Perfect-Dog-Breed/register">Register Here</a>   </p>
      </div>
    </form>
  );
};

export default SignIn;
