import React, { useState, useEffect } from 'react';
import signinBackground from '../images/signin.webp';
import godsImage from '../images/gods.webp';
import Footer from '../components/Footer';
import VerificationPopup from '../components/VerificationPopup';
import WelcomePopup from '../components/WelcomePopup';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');
  const [assignedTeam, setAssignedTeam] = useState(null);
  const [signUpComplete, setSignUpComplete] = useState(false);
  const [freelancer, setFreelancer] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [showForgotPasswordButton, setShowForgotPasswordButton] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (step === 1) {
      setShowConfirmPassword(true);
      setStep(2);
    } else if (step === 2) {
      if (password === confirmPassword) {
        try {
          const userExistsResponse = await fetch('http://localhost:3001/check-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });

          if (!userExistsResponse.ok) {
            const errorData = await userExistsResponse.json();
            throw new Error(`Error checking if user exists: ${errorData.message}`);
          }

          const userExists = await userExistsResponse.json();
          if (userExists.exists && !isResetPassword) {
            alert('User already exists. Please log in.');
            return;
          }

          const response = await fetch('http://localhost:3001/send-verification-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to send verification email: ${errorData.message}`);
          }

          const data = await response.json();

          if (data.success) {
            setVerificationCode(data.code);
            setShowVerificationPopup(true);
          } else {
            console.error('Error in backend response:', data.message);
          }
        } catch (error) {
          console.error('Error during sign-up:', error.message);
          alert(`Sign-up failed: ${error.message}`);
        }
      } else {
        alert('Passwords do not match!');
      }
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful!');
        window.location.href = '/signup'; // Redirecting to sign-up page after login
      } else if (response.status === 401) {
        alert('Login failed: Incorrect password');
        const reset = window.confirm('Incorrect password. Do you want to reset it?');
        if (reset) {
          setIsResetPassword(true);
          setStep(1); // Resetting to step 1 for password reset process
          setShowConfirmPassword(true);
        } else {
          setShowForgotPasswordButton(true);
        }
      } else if (response.status === 404) {
        alert('Login failed: User not found');
      } else {
        alert('Login failed: An unknown error occurred');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('An error occurred during login. Please try again later.');
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:3001/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to send reset verification email: ${errorData.message}`);
      }

      const data = await response.json();
      if (data.success) {
        alert('Verification code sent. Please check your email.');
        setShowVerificationPopup(true);
      } else {
        alert('Reset password failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during password reset:', error.message);
      alert('Password reset failed: ' + error.message);
    }
  };

  const handleVerificationSuccess = () => {
    fetch('http://localhost:3001/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code: parseInt(verificationCode) }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Verification failed.');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setShowVerificationPopup(false);
          if (isResetPassword) {
            handleSaveNewPassword();
          } else {
            setShowWelcomePopup(true);
          }
        } else {
          alert('Verification code is incorrect.');
        }
      })
      .catch((error) => {
        console.error('Error verifying code:', error);
      });
  };

  const handleSaveNewPassword = async () => {
    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3001/save-user-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user password.');
      }

      const data = await response.json();
      if (data.success) {
        alert('Password updated successfully. You can now log in with your new password.');
        setIsResetPassword(false);
        setStep(1);
      } else {
        console.error('Failed to update password:', data.message);
      }
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  const handleCompleteSignUp = async (firstName, lastName, cricketExperience, isUNCStudent, year, joinBCL, randomTeam) => {
    const userData = {
      email,
      password,
      firstName,
      lastName,
      cricketExperience,
      isUNCStudent,
      year,
      joinBCL,
      randomTeam,
      runs: 0,
      wickets: 0,
      games: 0,
      sixes: 0,
    };

    try {
      const response = await fetch('http://localhost:3001/save-user-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to save user data.');
      }

      const data = await response.json();
      if (data.success) {
        setAssignedTeam(randomTeam ? randomTeam : null);
        setFreelancer(joinBCL !== "Yes, let the Cricket Gods bless me with a team!");
        setShowWelcomePopup(false);
        setSignUpComplete(true);

        await saveUserDataToFile(firstName, lastName, randomTeam);
      } else {
        console.error('Failed to save user data:', data.message);
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const saveUserDataToFile = async (firstName, lastName, team) => {
    try {
      await fetch('http://localhost:3001/save-user-to-file', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, team }),
      });
    } catch (error) {
      console.error('Error saving user data to file:', error);
    }
  };

  return (
    <div className="SignUp">
      <div className="signin-image-container">
        <img 
          src={signUpComplete ? godsImage : signinBackground} 
          alt="Sign In Background" 
          className="signin-image" 
        />
        {signUpComplete && assignedTeam && (
          <>
            <h2 className="team-announcement">
              {freelancer ? "You are a freelancer" : `You have been drafted into ${assignedTeam}`}
            </h2>
            <img src={`../images/${assignedTeam}.webp`} alt="Team Icon" className="team-overlay-icon" />
          </>
        )}
        <form onSubmit={isResetPassword ? handleResetPassword : handleSignUp} className="signup-form">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmailChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange} required />
          {showConfirmPassword && (
            <>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </>
          )}
          <div className="button-container">
            {!showForgotPasswordButton ? (
              <>
                <button type="submit">{isResetPassword ? 'Reset Password' : (step === 1 ? 'Sign Up' : 'Continue Sign Up')}</button>
                <button type="button" onClick={handleLogin}>Login</button>
              </>
            ) : (
              <button type="button" onClick={() => setIsResetPassword(true)}>Forgot Password</button>
            )}
          </div>
        </form>
      </div>
      {showVerificationPopup && (
        <VerificationPopup
          onVerificationSuccess={handleVerificationSuccess}
          email={email}
          sentCode={verificationCode}
        />
      )}
      {showWelcomePopup && !isResetPassword && (
        <WelcomePopup
          onCompleteSignUp={handleCompleteSignUp}
          assignedTeam={assignedTeam}
          userEmail={email}
        />
      )}
      <Footer />
    </div>
  );
}

export default SignUp;
