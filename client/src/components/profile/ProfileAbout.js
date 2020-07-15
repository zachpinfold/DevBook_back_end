import React, { Fragment } from "react";
import PropTypes from "prop-types";

/* eslint-disable */

const ProfileABout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div class='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 class='text-primary'>{name.split(" ")[0]}'s Bio</h2>
        <p>{bio}</p>
        <div class='line'></div>
      </Fragment>
    )}

    <h2 class='text-primary'>Skill Set</h2>
    <div class='skills'>
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileABout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileABout;
