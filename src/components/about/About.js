import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <h2>About</h2>
      <p>
        This project was built for practice purposes using{' '}
        <strong>Context API</strong> by React.
      </p>
      <a href='https://github.com/uzairmunir'>
        <GitHubIcon className='git-icon' />
      </a>
    </div>
  );
};

export default About;
