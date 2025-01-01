import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function Lamber() {
  const [showPopup, setShowPopup] = useState(true); 
  const navigate = useNavigate(); 


  const handleSignIn = () => {
    navigate("/sign"); 
  };


  const handleLater = () => {
    setShowPopup(false); 
  };

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Do Login to Our Page</h2>
            <p>Please log in to access the full features of the page.</p>
            <button onClick={handleLater}>Later</button>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Lamber;
