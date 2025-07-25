import React from 'react';

function Text({ children, color }) {
  return <span style={{ color: color }}>{children}</span>;
}

export default Text;