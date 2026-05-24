import React from 'react';

export default function Mokshang() {
  const showAlert = () => {
    alert("Welcome to the jungle");
  };

  // Button CSS styles
  const buttonStyle = {
    color: '#ffffff',
    backgroundColor: '#2e7d32', // Green
    padding: '12px 24px',
    margin: '20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* 1. onClick event */}
      <button 
        style={buttonStyle} 
        onClick={showAlert}
      >
        Click Me
      </button>

      {/* 2. onDoubleClick event */}
      <button 
        style={buttonStyle} 
        onDoubleClick={showAlert}
      >
        Double Click Me
      </button>

      {/* 3. onChange event (tied to an input) */}
      <div style={{ margin: '20px' }}>
        <input type="text" 
          placeholder="Type here to trigger change..." 
          onChange={showAlert} 
          style={{ padding: '8px', width: '250px' }}
        />
      </div>

      {/* 4. on onSubmit event (wrapped in a form) */}
      <form onSubmit={(e) => { e.preventDefault(); showAlert(); }}>
        <button type="submit" style={buttonStyle}>
          Submit Form
        </button>
      </form>

    </div>
  );
}
