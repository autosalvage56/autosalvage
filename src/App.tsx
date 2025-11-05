import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      color: 'white',
      padding: '50px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#dc2626', marginBottom: '20px' }}>
        AutoSalvage
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
        Your Auto Parts Specialist
      </p>
      <div style={{ marginTop: '40px' }}>
        <button style={{
          background: '#dc2626',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '1.1rem',
          borderRadius: '8px',
          cursor: 'pointer',
          margin: '10px'
        }}>
          Shop Now
        </button>
        <button style={{
          background: 'transparent',
          color: 'white',
          border: '2px solid #dc2626',
          padding: '15px 30px',
          fontSize: '1.1rem',
          borderRadius: '8px',
          cursor: 'pointer',
          margin: '10px'
        }}>
          Contact Us
        </button>
      </div>
      <div style={{ marginTop: '50px' }}>
        <p>✅ React is working</p>
        <p>✅ Styles are loading</p>
        <p>✅ GitHub Pages deployment successful</p>
      </div>
    </div>
  );
}

export default App;
