import React from 'react';
import '../components/styles.css'; // Ensure this path is correct based on your directory structure
import Footer from '../components/Footer';

function FAQ() {
  return (
    <div className="FAQ">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <div className="question">Who can join BOUNC?</div>
        <div className="answer">
          BOUNC is free and open to anyone and everyone! 
          <br /> 
          Tar Heels, join now on 
          <a href="https://heellife.unc.edu/organization/bounc" className="heel-life-link" target="_blank" rel="noopener noreferrer"> Heel Life</a>!
        </div>
      </div>

      <div className="faq-item">
        <div className="question">I don’t know anything about cricket. Can I still come?</div>
        <div className="answer">
          Again, BOUNC is free and open to anyone and everyone! We also have 
          <a href="/burger-menu/rules" className="cricket-rules-link"> cricket rules </a>
          mentioned on our website and our heel life page, so feel free to explore.
        </div>
      </div>

      <div className="faq-item">
        <div className="question">I want to play but I don’t want to be part of a team. Is that possible?</div>
        <div className="answer">
          Of course! That’s why we have wild card players who wish to play for any team in any game they choose. We have made teams to make the tournament more interesting and to give the players a cause to play for. So, you can let the Cricket Gods decide your fate or make your own!
        </div>
      </div>

      <div className="faq-item">
        <div className="question">I want to play but I cannot commit a lot of time. What should I do?</div>
        <div className="answer">
          Come in whenever you want! We have made the tournament with 5 mini leagues so that we can keep in touch with cricket and everyone can participate for some time throughout the semester. There are no compulsions whatsoever although it will benefit your team should the members choose to participate regularly.
        </div>
      </div>

      <div className="faq-item">
        <div className="question">I have a question that is not mentioned here, what should I do?</div>
        <div className="answer">
          Reach out to us! Contact us at 
          <a href="mailto:bowlersbattersunc@gmail.com" className="email-link"> bowlersbattersunc@gmail.com</a> – we would love to hear from you!
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default FAQ;
