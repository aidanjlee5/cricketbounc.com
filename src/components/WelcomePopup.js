import React, { useState, useEffect } from 'react';
import nobleFranklinRidersLogo from '../images/NobleFranklinRiders.webp';
import blazingRamsesLogo from '../images/BlazingRamses.webp';
import tarHeelTrojansLogo from '../images/TarHeelTrojans.webp';
import sixerJordansLogo from '../images/6ixerJ0rdans.webp';
import godsImage from '../images/gods.webp'; // Importing the gods.webp image

function WelcomePopup({ onCompleteSignUp, userEmail }) {
  const [questionStep, setQuestionStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cricketExperience, setCricketExperience] = useState('');
  const [isUNCStudent, setIsUNCStudent] = useState('');
  const [year, setYear] = useState('');
  const [joinBCL, setJoinBCL] = useState('');
  const [randomTeam, setRandomTeam] = useState('');
  const [assignedTeamLogo, setAssignedTeamLogo] = useState(null);
  const [signUpComplete, setSignUpComplete] = useState(false);  // New state to handle sign-up completion

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleCricketExperienceChange = (e) => setCricketExperience(e.target.value);
  const handleIsUNCStudentChange = (e) => {
    setIsUNCStudent(e.target.value);
    if (e.target.value === "Yes, I’m a Tar Heel!") {
      setQuestionStep(3); // Keep it on the same step to show the year selection
    } else {
      setQuestionStep(4); // Move to the next step if not a UNC student
    }
  };
  const handleYearChange = (e) => setYear(e.target.value);
  const handleJoinBCLChange = (e) => setJoinBCL(e.target.value);

  const handleNextStep = () => {
    if (questionStep === 1 && firstName.trim() === '') {
      alert('First name is required!');
    } else {
      setQuestionStep(questionStep + 1);
    }
  };

  const handleCompleteSignUp = () => {
    const teamNames = ['Noble Franklin Riders', 'Blazing Ramses', 'TarHeel Trojans', '6ixer Jordans'];
    const randomTeamName = teamNames[Math.floor(Math.random() * teamNames.length)];
    setRandomTeam(randomTeamName);

    let teamLogo;
    switch (randomTeamName) {
      case 'Noble Franklin Riders':
        teamLogo = nobleFranklinRidersLogo;
        break;
      case 'Blazing Ramses':
        teamLogo = blazingRamsesLogo;
        break;
      case 'TarHeel Trojans':
        teamLogo = tarHeelTrojansLogo;
        break;
      case '6ixer Jordans':
        teamLogo = sixerJordansLogo;
        break;
      default:
        teamLogo = null;
    }
    setAssignedTeamLogo(teamLogo);

    onCompleteSignUp(firstName, lastName, cricketExperience, isUNCStudent, year, joinBCL, randomTeamName);
    setSignUpComplete(true);  // Set sign up as complete

    // Send Welcome Email
    sendWelcomeEmail(userEmail, randomTeamName);
  };

  const sendWelcomeEmail = async (email, teamName) => {
    const subject = "Welcome to BOUNC! We are excited to have you with us!";
    let body = `Welcome to BOUNC: Bowlers & Batters at UNC, the 1st official cricket club at America's 1st public university!\n\n`;

    if (joinBCL === "Yes, let the Cricket Gods bless me with a team!") {
      body += `You have been drafted into ${teamName}.`;
    } else {
      body += `You have chosen to decide your own fate and so may the odds be in your favour!`;
    }

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject,
          body,
        }),
      });
    } catch (error) {
      console.error("Failed to send welcome email:", error);
    }
  };

  return (
    <>
      {!signUpComplete && (
        <div className="welcome-popup">
          <h2>Welcome to Bounc! Finish signing up...</h2>
          {questionStep === 1 && (
            <>
              <label>First Name (required):</label>
              <input type="text" value={firstName} onChange={handleFirstNameChange} required />
              <label>Last Name (optional):</label>
              <input type="text" value={lastName} onChange={handleLastNameChange} />
              <button onClick={handleNextStep}>Next</button>
            </>
          )}
          {questionStep === 2 && (
            <>
              <label>Have you played cricket before?</label>
              <select value={cricketExperience} onChange={handleCricketExperienceChange} required>
                <option value="">Select...</option>
                <option value="Yes – a lot!">Yes – a lot!</option>
                <option value="Yes – a little bit..">Yes – a little bit..</option>
                <option value="Not at all">Not at all</option>
                <option value="I thought cricket was an insect!">I thought cricket was an insect!</option>
              </select>
              <button onClick={handleNextStep}>Next</button>
            </>
          )}
          {questionStep === 3 && (
            <>
              <label>Are you a UNC student?</label>
              <select value={isUNCStudent} onChange={handleIsUNCStudentChange} required>
                <option value="">Select...</option>
                <option value="Yes, I’m a Tar Heel!">Yes, I’m a Tar Heel!</option>
                <option value="No (but I want to be a BOUNCer!)">No (but I want to be a BOUNCer!)</option>
              </select>
              {isUNCStudent === "Yes, I’m a Tar Heel!" && (
                <>
                  <label>What year are you?</label>
                  <select value={year} onChange={handleYearChange} required>
                    <option value="">Select...</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="Grad student">Grad student</option>
                    <option value="PhD student">PhD student</option>
                    <option value="Professor">Professor</option>
                  </select>
                </>
              )}
              <button onClick={handleNextStep}>Next</button>
            </>
          )}
          {questionStep === 4 && (
            <>
              <label>Would you like to join a team in the BCL?</label>
              <select value={joinBCL} onChange={handleJoinBCLChange} required>
                <option value="">Select...</option>
                <option value="Yes, let the Cricket Gods bless me with a team!">
                  Yes, let the Cricket Gods bless with a team
                </option>
                <option value="No, I'm sorry, I'm a freelancer">No, I'm sorry, I'm a freelancer</option>
              </select>
              <button 
                onClick={() => {
                  if (joinBCL === "Yes, let the Cricket Gods bless me with a team!") {
                    handleCompleteSignUp();
                  } else if (joinBCL === "No, I'm sorry, I'm a freelancer") {
                    window.location.href = '/burger-menu/rules';
                  }
                }}
              >
                Complete Sign Up!
              </button>
            </>
          )}
        </div>
      )}

      {signUpComplete && (
        <div className="chosen-team">
          <h2 className="welcome-text">THE CRICKET GODS HAVE SPOKEN!</h2>
          <p className="welcome-subtext">YOU HAVE BEEN CHOSEN INTO {randomTeam}</p>
          <img src={assignedTeamLogo} alt="Assigned Team Logo" className="assigned-team-logo" />
          <img src={godsImage} alt="Cricket Gods" className="gods-image" />
          <button onClick={() => window.location.href='/burger-menu/rules'}>Great! Let's play some cricket!</button>
        </div>
      )}
    </>
  );
}

export default WelcomePopup;
