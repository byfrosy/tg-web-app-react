// LoadingScreen.js
import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={styles.container}>
      <h1>Loading...</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1c1c3b',
  },
};

export default LoadingScreen;
