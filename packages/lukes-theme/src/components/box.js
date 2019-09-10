import React from 'react';
import colors from '../tokens/colors';

export default ({ children }) => (
  <div style={{ padding: '1rem', backgroundColor: colors.primary }}>
    {children}
  </div>
);

// to use this in 'site', export it in index.js
