import React from 'react';
import Tagline from '../components/Tagline';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import './Home.module.scss';

export default () => {
  return (
    <div>
      <Tagline />
      <Navbar />
      <Content />
    </div>
  );
};
