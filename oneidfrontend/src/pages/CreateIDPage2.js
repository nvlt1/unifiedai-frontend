import React from 'react';
import './CreateIDPage2.scss';
import stopwatchImage from '../assets/vecteezy_time-stopwatch-deadline_44450066.png';

const CreateIDPage2 = () => {
  return (
    <div className="create-id-confirmation">
      <div className="confirmation-image">
        <img src={stopwatchImage} alt="Stopwatch Icon" />
      </div>
      <h2>We sent you the one-time link to your email.</h2>
      <p>Please check your email to create ONeID.</p>
      <button className="email-check-btn">Go check your email!</button>
    </div>
  );
};

export default CreateIDPage2;