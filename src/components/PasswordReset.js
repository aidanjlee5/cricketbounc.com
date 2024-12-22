import React, { useState } from 'react';
import './styles.css';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSendCode = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send verification email.');
      }

      alert('Verification code sent to your email.');
    } catch (error) {
      console.error('Error sending verification email:', error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await fetch('http://localhost:3001/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode }),
      });

      if (response.ok) {
        setIsVerified(true);
        alert('Verification successful! You can now reset your password.');
      } else {
        alert('Incorrect verification code.');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
    }
  };

  const handleResetPassword = async () => {
    if (isVerified) {
      try {
        const response = await fetch('http://localhost:3001/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, newPassword }),
        });

        if (!response.ok) {
          throw new Error('Failed to reset password.');
        }

        alert('Password reset successful.');
      } catch (error) {
        console.error('Error resetting password:', error);
      }
    }
  };

  return (
    <div className="password-reset">
      <h2>Reset Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button onClick={handleSendCode}>Send Verification Code</button>

      <input
        type="text"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        placeholder="Enter Verification Code"
        required
      />
      <button onClick={handleVerifyCode}>Verify Code</button>

      {isVerified && (
        <>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
            required
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </>
      )}
    </div>
  );
}

export default PasswordReset;
