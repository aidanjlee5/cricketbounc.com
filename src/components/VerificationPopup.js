import React, { useEffect, useState, useRef } from 'react';

function VerificationPopup({ onVerificationSuccess, email, onShow, sentCode }) {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    if (onShow) {
      onShow();  // Trigger handlePopupShow when the component mounts
    }

    return () => {
      isMounted.current = false;
    };
  }, [onShow]);

  const handleVerificationCodeChange = (e) => {
    if (isMounted.current) {
      setVerificationCode(e.target.value.trim());
    }
  };

  const handleVerify = () => {
    console.log('Sent Code:', sentCode);  // Log the code received from the server
    console.log('Entered Code:', verificationCode);  // Log the code entered by the user

    if (isMounted.current && verificationCode === sentCode.toString().trim()) {
      setError('');
      onVerificationSuccess(); // Call the function to hide the popup
    } else if (isMounted.current) {
      setError('Incorrect verification code. Please try again.');
    }
  };

  const handleResendCode = () => {
    fetch('http://localhost:3001/resend-verification-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to resend verification code.');
      }
      return response.json();
    })
    .then(data => {
      if (isMounted.current) {
        if (data.success) {
          setError('Verification code resent successfully.');
        } else {
          setError('Failed to resend verification code.');
        }
      }
    })
    .catch(error => {
      if (isMounted.current) {
        console.error('Error resending verification code:', error);
        setError('An error occurred while resending the code.');
      }
    });
  };

  

  return (
    <div className="verification-popup">
      <h2>Verification</h2>
      <p>A 6-digit verification code has been sent to your email: {email}</p>
      <input
        type="text"
        value={verificationCode}
        onChange={handleVerificationCodeChange}
        placeholder="Enter verification code"
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleVerify}>Verify</button>
      <button onClick={handleResendCode}>Resend Code</button>
    </div>
  );
}

export default VerificationPopup;
