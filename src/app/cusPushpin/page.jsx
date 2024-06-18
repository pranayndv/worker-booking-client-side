import React from 'react';

const CustomPushpin = ({ location, title, description }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>Latitude: {location[0]}</div>
      <div>Longitude: {location[1]}</div>
    </div>
  );
};

export default CustomPushpin;
