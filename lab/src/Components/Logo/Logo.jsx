import React from 'react'

function Logo() {
  return (
    <div className="logo">
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
        alt="logo"
      />
      <img
        className='menu'
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
        alt="menu"
      />
    </div>
  );
}

export default Logo