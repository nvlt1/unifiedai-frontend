import React from 'react';
import './CreateIDPage2.scss'; // Make sure the CSS file is present

const CreateIDPage2 = () => {
  return (
    <div className="create-id-confirmation">
      <div className="confirmation-placeholder">
        <div className="emoji">📧</div> {/* Placeholder emoji */}
      </div>
      <h2>We sent you the one-time link to your email.</h2>
      <p>Please check your email to create ONeID.</p>
      <button className="email-check-btn">Go check your email!</button>
    </div>
  );
};

export default CreateIDPage2;
