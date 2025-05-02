import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  code: {
    fontSize: '72px',
    marginBottom: '20px',
    color: '#ff4d4f',
  },
  message: {
    fontSize: '20px',
    marginBottom: '30px',
  },
  link: {
    fontSize: '16px',
    color: '#1890ff',
    textDecoration: 'underline',
  },
};

export default function Custom403() {
    return (
      <div style={styles.container}>
        <h1 style={styles.code}>403</h1>
        <p style={styles.message}>Forbidden – You don’t have permission to access this page.</p>
        <a href="/" style={styles.link}>Go back home</a>
      </div>
    );
  }
  