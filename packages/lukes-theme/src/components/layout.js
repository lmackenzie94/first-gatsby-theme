import React from 'react';

export default ({ children }) => (
  <section
    style={{
      display: 'block',
      width: '650px',
      maxWidth: '90%',
      margin: '2rem auto',
      fontFamily: 'Arial'
    }}
  >
    {children}
  </section>
);

// add this to gatsby-config as the default layout
